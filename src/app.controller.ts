import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service'


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private db: PrismaService) { }

  @Get()
  index(): string {
    return this.appService.getHello();
  }

  @Get('/app')
  async app(): Promise<object> {
    const data = await this.db.user.create(
      {
        data: {
          username: 'Djasnive',
          password: '12345',
        }
      });
    return data;
  }

}
