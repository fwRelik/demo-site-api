import { Controller, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@Post('register')
	async register(@Body() dto: AuthDto) {
		return this.authService.register(dto);
	}

	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	@Post('login')
	async login(@Body() dto: AuthDto) {
		return this.authService.login(dto);
	}
}
