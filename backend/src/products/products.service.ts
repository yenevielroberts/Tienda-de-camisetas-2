import { Injectable } from '@nestjs/common';

export type Product = {
  id: number;
  name: string;
  price: number;
};

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    { id: 1, name: 'Camiseta básica', price: 19.99 },
    { id: 2, name: 'Camiseta estampada', price: 24.99 },
  ];

  findAll(): Product[] {
    return this.products;
  }
}