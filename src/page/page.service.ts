import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MainPageModel } from './models/main-page.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PAGE_IS_EXIST, PAGE_NOT_FOUND } from './page.constants';

@Injectable()
export class PageService {
	constructor(@InjectModel(MainPageModel.name) private readonly mainPageModel: Model<MainPageModel>) {}

	async getMainPage() {
		const isExist = await this.mainPageModel.findOne({}).exec();
		if (!isExist) throw new NotFoundException(PAGE_NOT_FOUND);

		return isExist;
	}

	async createMainPage(page: MainPageModel) {
		const isExist = await this.mainPageModel.findOne({}).exec();
		if (isExist) throw new BadRequestException(PAGE_IS_EXIST);

		return await this.mainPageModel.create(page);
	}

	async updateMainPage(id: string, page: MainPageModel) {
		const updated = await this.mainPageModel.findByIdAndUpdate(id, page, { new: true }).exec();
		if (!updated) throw new NotFoundException(PAGE_NOT_FOUND);

		return updated;
	}

	async createRoomPage() {}
	async updateRoomPage() {}
	async deleteRoomPage() {}

	async createGeneralPurposePage() {}
	async updateGeneralPurposePage() {}
	async deleteGeneralPurposePage() {}
}

