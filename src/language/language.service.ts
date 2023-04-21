import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LanguageDocument, LanguageModel } from './models/language.model';
import { Model } from 'mongoose';
import { LANGUAGE_PACKAGE_IS_EXIST, LANGUAGE_PACKAGE_NOT_FOUND } from './language.constants';

@Injectable()
export class LanguageService {
	constructor(@InjectModel(LanguageModel.name) private readonly languageModel: Model<LanguageDocument>) {}

	async getAll() {
		const isExistData = await this.languageModel.findOne({}).exec();
		if (!isExistData) throw new NotFoundException(LANGUAGE_PACKAGE_NOT_FOUND);

		return isExistData;
	}

	async registerAll(data: LanguageModel) {
		const isExistData = await this.languageModel.exists({}).exec();
		if (isExistData) throw new BadRequestException(LANGUAGE_PACKAGE_IS_EXIST);

		return await this.languageModel.create(data);
	}

	async updageAll(data: LanguageModel) {
		return await this.languageModel.findOneAndUpdate({}, data, { new: true });
	}
}

