import { Body, Controller, Param, Patch, Post, Get, UsePipes, ValidationPipe, Delete, UseGuards } from '@nestjs/common';
import { PageService } from './page.service';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { MainPageModel } from './models/main-page.model';
import { RoomPageModel } from './models/room-page';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('page')
export class PageController {
	constructor(private readonly pageService: PageService) {}

	//#region MainPage Routes

	@Get('main')
	async getMainPage() {
		return this.pageService.getMainPage();
	}

	// @UsePipes(new ValidationPipe())
	@Post('main')
	async createMainPage(@Body() data: MainPageModel) {
		return this.pageService.createMainPage(data);
	}

	// @UsePipes(new ValidationPipe())
	@Patch('main')
	async updateMainPage(@Body() data: MainPageModel) {
		return await this.pageService.updateMainPage(data);
	}

	//#endregion

	//#region RoomPage Routes

	@Get('room')
	async getAllRoomPage() {
		return this.pageService.getAllRoomPage();
	}

	@Get('room/:id')
	async getByIdRoomPage(@Param('id', IdValidationPipe) id) {
		return this.pageService.getRoomPageById(id);
	}

	// @UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Post('room')
	async createRoomPage(@Body() data: RoomPageModel) {
		return this.pageService.createRoomPage(data);
	}

	// @UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Patch('room/:id')
	async updateRoomPage(@Param('id', IdValidationPipe) id, @Body() data: RoomPageModel) {
		return await this.pageService.updateRoomPageById(id, data);
	}

	// @UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Delete('room/:id')
	async deleteRoomPage(@Param('id', IdValidationPipe) id) {
		return await this.pageService.deleteRoomPageById(id);
	}

	//#endregion
}

