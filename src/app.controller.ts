import { Controller, Get, Post, Body } from '@nestjs/common';
import { seconds, Throttle } from '@nestjs/throttler';

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

  @Throttle({
    default: { ttl: seconds(10), limit: 2 }, // Override default throttler
  })
  @Post('auth/login')
  login(@Body() body: { username: string; password: string }): string {
    return `Login attempt for user: ${body.username} with password: ${body.password}`;
  }
}
