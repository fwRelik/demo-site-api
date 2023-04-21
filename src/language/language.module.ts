import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageModel, LanguageSchema } from './models/language.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: LanguageModel.name, schema: LanguageSchema }])],
	controllers: [LanguageController],
	providers: [LanguageService],
})
export class LanguageModule {}

