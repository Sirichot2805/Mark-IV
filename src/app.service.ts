import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 123;
  }

  // getParamTest( text:string): string {
  //   return `Text is ${text}`
  // }
}
