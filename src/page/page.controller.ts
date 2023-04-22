import { Body, Controller, Param, Patch, Post, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { PageService } from './page.service';
import { MainPageModel } from './models/main-page.model';
import { IdValidationPipe } from 'src/pipes/id-validation.pip';

@Controller('page')
export class PageController {
	constructor(private readonly pageService: PageService) {}

	@Get('main')
	async getMainPage() {
		return this.pageService.getMainPage();
	}

	@UsePipes(new ValidationPipe())
	@Post('main')
	async createMainPage(@Body() data: MainPageModel) {
		return this.pageService.createMainPage(data);
	}

	@UsePipes(new ValidationPipe())
	@Patch('main/:id')
	async updateMainPage(@Param('id', IdValidationPipe) id, @Body() data: MainPageModel) {
		return await this.pageService.updateMainPage(id, data);
	}
}

