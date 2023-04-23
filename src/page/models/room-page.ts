import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MainPageModel } from './main-page.model';

export type RoomPageDocument = HydratedDocument<RoomPageModel>;

@Schema()
export class RoomPageModel extends MainPageModel {
	@Prop({ required: true })
	roomName: string;

	@Prop({ required: true })
	roomType: string;

	@Prop()
	roomDescription?: string;

	@Prop()
	roomImagePath?: string;
}

export const RoomPageSchema = SchemaFactory.createForClass(RoomPageModel);
