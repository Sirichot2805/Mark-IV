import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT =  '0.0.0.0' || 3000
  await app.listen(process.env.PORT||3000);
}
bootstrap();
