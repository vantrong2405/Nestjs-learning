import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT')
  app.useStaticAssets(join(__dirname, '..', 'public'));// get html ,css , js in public 
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // get views
  app.setViewEngine('ejs');
  await app.listen(PORT);
  console.log(`Server is running on http://localhost:${PORT}`);
}
bootstrap();
