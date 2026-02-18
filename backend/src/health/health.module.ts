import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
// Agrupa lo necesario para el estado del servicio.
export class HealthModule {}