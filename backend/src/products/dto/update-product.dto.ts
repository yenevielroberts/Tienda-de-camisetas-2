import { IsNumber, IsOptional, IsString, Min } from "class-validator";

// Datos que se pueden cambiar en un producto.
export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;
}
