import { Controller, Get, Post, Put, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';
import * as  express from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post('carnaval')
  async setUserCarnaval(@Request() req) {
    return this.appService.createUserField(req.body);
  }
}
