import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LanguageDocument = HydratedDocument<LanguageModel>;

export class ITranslation {
	translation: Record<string, unknown>;
}

export class IResources {
	resources: Record<string, ITranslation>;
}

@Schema()
export class LanguageModel {
	@Prop({ type: IResources })
	resources: IResources;
}

export const LanguageSchema = SchemaFactory.createForClass(LanguageModel);
