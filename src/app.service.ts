import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'arai';
  }
  getHello2() {
    return 'arai2';
  }
  // getParamTest( text:string): string {
  //   return `Text is ${text}`
  // }
}
