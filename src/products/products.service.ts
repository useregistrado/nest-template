import { Injectable } from '@nestjs/common';
import { ProductDto } from './Products.dto';

@Injectable()
export class ProductsService {
  createProduct(data: ProductDto) {
    const { name, price } = data;
    return { message: 'creado con exito', iva: price * 0.19, name };
  }
}
