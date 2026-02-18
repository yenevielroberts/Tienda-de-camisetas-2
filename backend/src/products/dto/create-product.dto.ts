import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

// Datos necesarios para crear un producto.
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @Min(0)
  price: number;
}
