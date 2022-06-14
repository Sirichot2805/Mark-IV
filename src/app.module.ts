import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';
import { CalSha256Module } from './cal-sha256/cal-sha256.module';


@Module({
  imports: [UsersModule,QuestionsModule, CalSha256Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
