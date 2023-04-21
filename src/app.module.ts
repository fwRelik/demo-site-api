import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMongoConfig } from './configs/mongo.config';
import { PageModule } from './page/page.module';
import { LanguageModule } from './language/language.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['.env', '.env.local'],
		}),
		AuthModule,
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		PageModule,
		LanguageModule,
	],
})
export class AppModule {}
