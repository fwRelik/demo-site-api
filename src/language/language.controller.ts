import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageModel } from './models/language.model';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('lang')
export class LanguageController {
	constructor(private readonly languageService: LanguageService) {}

	@Get()
	async getAll() {
		return await this.languageService.getAll();
	}

	@UseGuards(JwtAuthGuard)
	@Post()
	async registerAll(@Body() body: LanguageModel) {
		return await this.languageService.registerAll(body);
	}

	@UseGuards(JwtAuthGuard)
	@Patch()
	async updageAll(@Body() body: LanguageModel) {
		return await this.languageService.updageAll(body);
	}
}

