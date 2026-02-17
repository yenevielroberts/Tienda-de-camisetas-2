// Módulo global que expone PrismaService a toda la aplicación.
// Comentarios simples para recordar su propósito.

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Hace que el servicio esté disponible en toda la app sin necesidad de importarlo en cada módulo
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}