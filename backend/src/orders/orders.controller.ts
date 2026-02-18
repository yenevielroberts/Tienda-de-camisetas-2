import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
// Recibe las peticiones de pedidos.
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll() {
    // Devuelve todos los pedidos guardados.
    return this.ordersService.findAll();
  }
}
