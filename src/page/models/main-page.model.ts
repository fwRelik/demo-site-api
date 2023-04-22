import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BasePageModel } from './base-page.model';

export type MainPageDocument = HydratedDocument<MainPageModel>;

@Schema()
export class MainPageModel extends BasePageModel {}

export const MainPageSchema = SchemaFactory.createForClass(MainPageModel);
