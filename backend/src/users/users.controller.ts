import { Controller, Get } from '@nestjs/common';
import { UsersService, UserPublic } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserPublic[]> {
    return this.usersService.findAll();
  }
}
