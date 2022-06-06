import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';
import { CatController } from './cat/cat.controller';
import { FirstModule } from './first/first.module';

@Module({
  imports: [UserModule, QuestionsModule, FirstModule],
  controllers: [AppController, CatController],
  providers: [AppService],
})
export class AppModule {}
