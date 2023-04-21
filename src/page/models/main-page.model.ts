import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Page } from '../interfaces/page.interface';
import { HydratedDocument } from 'mongoose';

export type MainPageDocument = HydratedDocument<MainPageModel>;

@Schema()
export class MainPageModel implements Page {
	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	description: string;

	@Prop()
	favicon?: string;
}

export const MainPageSchema = SchemaFactory.createForClass(MainPageModel);
