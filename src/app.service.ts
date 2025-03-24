import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class AppService {

  constructor(
    private readonly prisma: PrismaService
  ){}


  createProduct({name, description} : CreateProductDto) {
    return this.prisma.product.create({
      data: {
        name,
        description
      }
    });
  }

}
