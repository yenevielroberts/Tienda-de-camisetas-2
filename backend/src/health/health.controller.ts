import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
// Recibe la peticion para saber si todo esta bien.
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check(): { success: boolean; message: string } {
    // Devuelve un mensaje simple de estado.
    return this.healthService.getHealth();
  }
}