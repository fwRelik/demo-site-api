import { HydratedDocument } from 'mongoose';
import { MainPageModel } from './main-page.model';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { LanguageModel } from './language.model';

export type BasePageDocument = HydratedDocument<MainPageModel>;

@Schema()
export class BasePageModel {
	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	description: string;

	@Prop({ required: true })
	editable: boolean;

	@Prop({ required: true })
	removable: boolean;

	@Prop({ type: LanguageModel })
	languagePack: LanguageModel;
}

export const BasePageSchema = SchemaFactory.createForClass(BasePageModel);
