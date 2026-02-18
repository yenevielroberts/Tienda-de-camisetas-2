import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type UserPublic = {
  // Datos basicos que se pueden mostrar.
  id: number;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

@Injectable()
// Logica de usuarios.
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UserPublic[]> {
    // Lee usuarios y evita traer la contrasena.
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
