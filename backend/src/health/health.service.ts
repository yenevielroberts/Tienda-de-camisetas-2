import { Injectable } from '@nestjs/common';

@Injectable()
// Entrega una respuesta fija de estado.
export class HealthService {
  getHealth(): { success: boolean; message: string } {
    // Mensaje simple para confirmar que esta activo.
    return { success: true, message: 'Service is healthy' };
  }
}