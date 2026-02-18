import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
// Logica de pedidos.
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    // Lee todos los pedidos desde la base de datos.
    return this.prisma.order.findMany();
  }
}
