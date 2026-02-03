import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createProduct(
    @Body() data: CreateProductDto
  ) {
    return this.appService.createProduct(data);
  }
}
