import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // say hello to the world
    return 'Hello World!';
  }
}
