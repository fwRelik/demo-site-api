import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { LanguageModel } from './language.model';

export type MainPageDocument = HydratedDocument<MainPageModel>;

@Schema()
export class MainPageModel {
	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	description: string;

	@Prop({ required: true })
	removable: boolean;

	@Prop({ type: LanguageModel, required: true })
	languagePack: LanguageModel;
}

export const MainPageSchema = SchemaFactory.createForClass(MainPageModel);
