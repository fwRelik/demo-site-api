import { BadRequestException, Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { MainPageModel } from './models/main-page.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PAGE_IS_EXIST, PAGE_NOT_FOUND } from './page.constants';
import { RoomPageModel } from './models/room-page';

@Injectable()
export class PageService {
	constructor(
		@InjectModel(MainPageModel.name) private readonly mainPageModel: Model<MainPageModel>,
		@InjectModel(RoomPageModel.name) private readonly roomPageModel: Model<RoomPageModel>
	) {}

	//#region MainPage

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

	//#endregion

	//#region RoomPage

	async getAllRoomPage() {
		return await this.roomPageModel.find({}).exec();
	}

	async getByIdRoomPage(id: string) {
		const isExist = await this.roomPageModel.findById(id).exec();
		if (!isExist) throw new NotFoundException(PAGE_NOT_FOUND);

		return isExist;
	}

	async createRoomPage(page: RoomPageModel) {
		return await this.roomPageModel.create(page);
	}
	async updateRoomPage(id: string, page: RoomPageModel) {
		const updated = await this.roomPageModel.findByIdAndUpdate(id, page, { new: true }).exec();
		if (!updated) throw new NotFoundException(PAGE_NOT_FOUND);

		return updated;
	}
	async deleteRoomPage(id: string) {
		const removed = this.roomPageModel.findByIdAndDelete(id).exec();
		if (!removed) throw new NotFoundException(PAGE_NOT_FOUND);

		return removed;
	}

	//#endregion

	//#region GenerealPurposePage

	async getAllGeneralPurposePage() {
		throw new NotImplementedException('Method is not implemented');
	}
	async getByIdGeneralPurposePage() {
		throw new NotImplementedException('Method is not implemented');
	}
	async createGeneralPurposePage() {
		throw new NotImplementedException('Method is not implemented');
	}
	async updateGeneralPurposePage() {
		throw new NotImplementedException('Method is not implemented');
	}
	async deleteGeneralPurposePage() {
		throw new NotImplementedException('Method is not implemented');
	}

	//#endregion
}

