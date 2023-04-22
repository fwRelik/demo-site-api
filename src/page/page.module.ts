import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MainPageModel, MainPageSchema } from './models/main-page.model';
import { RoomPageModel, RoomPageSchema } from './models/room-page';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: MainPageModel.name, schema: MainPageSchema },
			{ name: RoomPageModel.name, schema: RoomPageSchema },
		]),
	],
	providers: [PageService],
	controllers: [PageController],
})
export class PageModule {}

