import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
// Logica de productos.
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    // Lee todos los productos desde la base de datos.
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    // Busca un producto por id.
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(data: CreateProductDto) {
    // Guarda un producto nuevo.
    return this.prisma.product.create({ data });
  }

  async update(id: number, data: UpdateProductDto) {
    // Actualiza un producto si existe.
    await this.getByIdOrThrow(id);
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    // Borra un producto si existe.
    await this.getByIdOrThrow(id);
    return this.prisma.product.delete({ where: { id } });
  }

  private async getByIdOrThrow(id: number) {
    // Revisa que el producto exista antes de seguir.
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }
    return product;
  }
}