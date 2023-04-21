import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

async function bootstrap() {
	dotenv.config();
	const port = process.env.PORT || 3000;

	const app = await NestFactory.create(AppModule);
	app.enableCors();
	app.setGlobalPrefix('api');

	await app.listen(port);

	Logger.log(`Server started: http://localhost:${port}`);
}

bootstrap();
