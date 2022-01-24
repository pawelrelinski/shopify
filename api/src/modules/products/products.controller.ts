import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { FindOneParams } from './classes/find-one-params';
import { CreateProductDto } from './dto/create-product.dto';
import { ListAllProductsDto } from './dto/list-all-products.dto';
import { CreateProductResponseDto } from './dto/create-product-response.dto';
import { DeleteProductResponseDto } from './dto/delete-product-response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<{ products: Product[] }> {
    const products: Product[] = await this.productsService.findAll();
    return {
      products: products,
    };
  }

  @Get('findByFilter')
  @HttpCode(HttpStatus.OK)
  public async findAllByFilter(
    @Query('sortBy') sortBy: ListAllProductsDto['sortBy'],
    @Query('sortMethod') sortMethod: ListAllProductsDto['sortMethod'],
    @Query('limit') take: ListAllProductsDto['take'],
    @Query('offset') skip: ListAllProductsDto['skip'],
  ): Promise<{ products: Product[] }> {
    const products: Product[] = await this.productsService.findAllByFilter(
      sortBy,
      sortMethod,
      take,
      skip,
    );
    return {
      products: products,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public findOne(@Param('id') id: FindOneParams['id']): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  public async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<CreateProductResponseDto> {
    const product: Product = await this.productsService.create(
      createProductDto,
    );
    console.log(image);
    console.log(createProductDto);
    return {
      product: product,
      status: HttpStatus.CREATED,
      message: 'Product has been created',
    };
  }

  // @Post('image')
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (req, file, cb) => {
  //         const randomName = Array(32)
  //           .fill(null)
  //           .map(() => Math.round(Math.random() * 16).toString(16))
  //           .join('');
  //         cb(null, `${randomName}${extname(file.originalname)}`);
  //       },
  //     }),
  //   }),
  // )
  // public img(
  //   @Body() body: { image: any },
  //   @UploadedFile() image: Express.Multer.File,
  // ): any {
  //   console.log(image);
  // }

  @Delete()
  @HttpCode(HttpStatus.OK)
  public async findOneAndDelete(
    @Param('id') id: FindOneParams['id'],
  ): Promise<DeleteProductResponseDto> {
    await this.productsService.delete(id);
    return {
      status: HttpStatus.OK,
      message: 'Product has been deleted',
    };
  }
}
