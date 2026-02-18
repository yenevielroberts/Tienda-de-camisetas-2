import { Controller, Get } from '@nestjs/common';
import { UsersService, UserPublic } from './users.service';

@Controller('users')
// Recibe las peticiones de usuarios.
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserPublic[]> {
    // Devuelve la lista de usuarios sin la contrasena.
    return this.usersService.findAll();
  }
}
