import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
// Recibe las peticiones de productos.
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    // Devuelve todos los productos guardados.
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    // Devuelve un producto por su id.
    return this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateProductDto) {
    // Crea un producto con los datos recibidos.
    return this.productsService.create(body);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    // Actualiza un producto existente.
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    // Elimina un producto por su id.
    return this.productsService.remove(id);
  }
}