import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductPipe } from './create-product.pipe';
import { ProductDto } from './Products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {} //En el constructor instanciamos el servicio que creamos
  @Post('newProduct') // el enpoint queda: host:3000/products/newProduc
  async newProduct(@Body(CreateProductPipe) body: ProductDto) {
    return this.productsService.createProduct(body);
  }
}
