import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Request } from 'express';
import { User } from '../entities/user.entity';

@Controller('user')
export class ProfileController {
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req: Request): User {
    return req.user as User;
  }
}
