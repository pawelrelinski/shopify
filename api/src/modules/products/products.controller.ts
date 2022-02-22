import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
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
import { Product } from './enities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductResponseDto } from './dto/create-product-response.dto';
import { DeleteProductResponseDto } from './dto/delete-product-response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { HOST_ADDRESS } from '../../config/configuration';
import { ErrorResponse } from '../../models/error-response';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { options as localOptions } from '../../utils/fileInterceptorLocalOptions';
import { FindAllResponseDto } from './dto/find-all-response.dto';
import { FindByViewsCountResponseDto } from './dto/find-by-views-count-response.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  private uploadsUrl: string = `http://${HOST_ADDRESS}:${process.env.SERVER_PORT}/uploads/`;

  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all products.' })
  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(@Query() query): Promise<FindAllResponseDto> {
    const products: Product[] = await this.productsService.findAll(query);
    const productsCountInCategory: number = await this.productsService.count(
      query.category,
    );
    return {
      productsCountInCategory,
      products,
    };
  }

  @ApiOperation({ summary: 'Get products by views count' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return products views by given filter.',
  })
  @Get('views')
  @HttpCode(HttpStatus.OK)
  public async findByViewsCount(
    @Query() query,
  ): Promise<FindByViewsCountResponseDto> {
    return await this.productsService.findMostPopularFromLastDays(query);
  }

  @ApiOperation({ summary: 'Add image' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description:
      'Return object containing file metadata and access information.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Post('image')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('image', localOptions))
  public async addImage(
    @UploadedFile() image: Express.Multer.File,
  ): Promise<Express.Multer.File> {
    return image;
  }

  @ApiOperation({
    summary: 'Get count of all products or products from given category',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return products count.' })
  @Get('count')
  @HttpCode(HttpStatus.OK)
  public async count(
    @Query('category') category: string,
  ): Promise<{ count: number }> {
    const count: number = await this.productsService.count(category);
    return { count };
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return product.' })
  @Get(':id')
  @Header('Cross-Origin-Embedder-Policy', 'unsafe-none')
  @HttpCode(HttpStatus.OK)
  public async findOne(
    @Param('id') id: string,
  ): Promise<Product | ErrorResponse> {
    const product: Product | null = await this.productsService.findOne(id);
    if (!product) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Not found product',
      };
    }
    product.image = `${this.uploadsUrl}${product.image}`;
    return product;
  }

  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The product has been successfully created.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<CreateProductResponseDto> {
    const product: Product = await this.productsService.create(
      createProductDto,
    );
    return {
      product: product,
      status: HttpStatus.CREATED,
      message: 'Product has been created',
    };
  }

  @ApiOperation({ summary: 'Delete product by given id' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The product has been successfully deleted.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async findOneAndDelete(
    @Param('id') id: string,
  ): Promise<DeleteProductResponseDto> {
    await this.productsService.delete(id);
    return {
      status: HttpStatus.OK,
      message: 'Product has been deleted',
    };
  }
}
