import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [UserModule, QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
