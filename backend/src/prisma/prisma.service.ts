// Servicio que envuelve el cliente de Prisma para inyectarlo en NestJS.
// Comentarios sencillos para recordar qué hace cada método.

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // Se ejecuta cuando el módulo se inicia: conecta con la base de datos.
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  // Se ejecuta cuando el módulo se destruye: cierra la conexión.
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  // Aquí podrías añadir helpers comunes para trabajar con Prisma si hace falta.
}