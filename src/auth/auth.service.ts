import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDocument, AuthModel } from './models/auth.model';
import { Model } from 'mongoose';
import { compare, genSalt, hash } from 'bcryptjs';
import { ALREADY_REGISTERED, USER_NOT_FOUND, WRONG_PASSWORD } from './auth.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(AuthModel.name) private readonly authModel: Model<AuthDocument>,
		private readonly jwtService: JwtService
	) {}

	async register(dto: AuthDto) {
		// Check user
		const oldUser = await this.findUser(dto.email);
		if (oldUser) throw new BadRequestException(ALREADY_REGISTERED);

		// If not exist user
		const salt = await genSalt(10);
		const newUser = new this.authModel({
			name: dto.name,
			email: dto.email,
			passwordHash: await hash(dto.password, salt),
		});

		return newUser.save();
	}

	async findUser(email: string) {
		return this.authModel.findOne({ email }).exec();
	}

	async validateUser(email: string, password: string): Promise<Pick<AuthModel, 'email'>> {
		const user = await this.findUser(email);
		if (!user) throw new UnauthorizedException(USER_NOT_FOUND);

		const isCorrectPassword = await compare(password, user.passwordHash);
		if (!isCorrectPassword) throw new UnauthorizedException(WRONG_PASSWORD);

		return { email: user.email };
	}

	async login(dto: AuthDto) {
		const { email } = await this.validateUser(dto.email, dto.password);
		return { access_token: await this.jwtService.signAsync({ email }) };
	}
}
