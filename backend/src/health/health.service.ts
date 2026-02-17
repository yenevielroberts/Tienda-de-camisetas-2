import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): { success: boolean; message: string } {
    return { success: true, message: 'Service is healthy' };
  }
}