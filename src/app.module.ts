import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';


@Module({
imports: [UsersModule,QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
