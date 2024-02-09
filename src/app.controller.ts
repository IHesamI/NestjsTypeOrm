import { Controller, Get, Ip, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private dataSource: DataSource) {
  }

  @Get()
  getHello(@Ip() ip): string {
    return this.appService.getHello();
  }

}
