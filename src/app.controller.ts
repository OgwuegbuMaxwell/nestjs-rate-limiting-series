import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome(): string {
    return 'Welcome to the API!';
  }

  @Get('products')
  getProducts(): string {
    return 'Here are some products!';
  }

  @Post('auth/login')
  login(@Body() body: { username: string; password: string }): string {
    return `Login attempt for user: ${body.username} with password: ${body.password}`;
  }
}
