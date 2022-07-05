import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ||5000, function() {
    console.log('Listening on port %d', process.env.PORT);
});
}
bootstrap();
