import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type UserPublic = {
  id: number;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UserPublic[]> {
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
