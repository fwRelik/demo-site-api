import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MainPageModel, MainPageSchema } from './models/main-page.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: MainPageModel.name, schema: MainPageSchema }])],
	providers: [PageService],
	controllers: [PageController],
})
export class PageModule {}

