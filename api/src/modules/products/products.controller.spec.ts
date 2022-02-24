import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateProductDto } from './dto/create-product.dto';
import { HttpStatus } from '@nestjs/common';

describe('ProductsController', () => {
  let productDto = {
    name: 'testing product',
    description: ' testing product description',
    defaultPrice: 99.99,
    category: 3,
    quantity: 3,
    producer: 'Testing Corporation',
    expectedDeliveryTime: 5,
    refNumber: 'DWA-123DA',
    dataSheet: JSON.stringify({ key: 'key1', value: 'val1' }),
    isPublished: true,
    image: 'BmKo',
  };
  const arrayOfProductsDto = [
    { id: 1, ...productDto },
    { id: 2, ...productDto },
    { id: 3, ...productDto },
  ];

  let productPopularFromLastDays = {
    productId: Date.now(),
    productName: 'Ameresco Solar Panel 10W 12V C1D2 - 410J',
    productImage: 'a81eb392d25349444b6e7d95e7bf54f3.jpeg',
    categoryId: Date.now(),
    productViews: Date.now().toString(),
  };
  const mostPopularProductsFromLastDays = [
    { ...productPopularFromLastDays },
    { ...productPopularFromLastDays },
    { ...productPopularFromLastDays },
  ];

  let controller;
  let service;

  const mockProductsService = {
    findAll: jest.fn((query?: any) => arrayOfProductsDto),
    create: jest.fn((dto: CreateProductDto) => {
      return { id: Date.now(), ...dto };
    }),
    count: jest.fn((category: string) => Date.now()),
    findMostPopularFromLastDays: jest.fn(
      (query: any) => mostPopularProductsFromLastDays,
    ),
    findOne: jest.fn((id: number) => {
      return arrayOfProductsDto.find((product) => product.id === id);
    }),
    delete: jest.fn((id: number) => {}),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: ProductsService,
          useValue: mockProductsService,
        },
      ],
    }).compile();

    controller = moduleRef.get<ProductsController>(ProductsController);
    service = moduleRef.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    let query = {};

    it('should return all products', async () => {
      const result = await controller.findAll(query);
      const expected = {
        products: arrayOfProductsDto,
        productsCountInCategory: expect.any(Number),
      };

      expect(result).toEqual(expected);
      expect(mockProductsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findByViewsCount', () => {
    let query = {};

    it('should return products with view count', async () => {
      const result = await controller.findByViewsCount(query);
      const expected = [...mostPopularProductsFromLastDays];

      expect(result).toEqual(expected);
      expect(
        mockProductsService.findMostPopularFromLastDays,
      ).toHaveBeenCalled();
    });
  });

  describe('count', () => {
    let category = '';

    it('should return count of all products', async () => {
      const result = await controller.count(category);
      const expected = { count: expect.any(Number) };

      expect(result).toEqual(expected);
      expect(mockProductsService.count).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    const uploadsUrl = `http://${process.env.HOST_ADDRESS}:${process.env.SERVER_PORT}/${process.env.UPLOADS_DIRECTORY}/`;
    let id = 1;

    it('should return product', async () => {
      const result = await controller.findOne(id);
      const expected = { id, ...productDto };
      expected.image = `${uploadsUrl}${expected.image}`;

      expect(result).toEqual(expected);
      expect(mockProductsService.findOne).toHaveBeenCalled();
      expect(mockProductsService.findOne).toHaveBeenCalledWith(id);
    });

    it('should return NOT_FOUND error', async () => {
      const result = await controller.findOne(id + Date.now());
      const expected = { id, ...productDto };
      expected.image = `${uploadsUrl}${expected.image}`;

      expect(result).not.toEqual(expected);
      expect(mockProductsService.findOne).toHaveBeenCalled();
      expect(mockProductsService.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('create', () => {
    it('should be create a product', async () => {
      const result = await controller.create(productDto);
      const expected = {
        product: { id: expect.any(Number), ...productDto },
        status: 201,
        message: 'Product has been created',
      };

      expect(result).toEqual(expected);
      expect(mockProductsService.create).toHaveBeenCalledWith(productDto);
    });
  });

  describe('findOneAndDelete', () => {
    it('should return OK response', async () => {
      const id = 3;
      const result = await controller.findOneAndDelete(id);
      const expected = {
        status: HttpStatus.OK,
        message: 'Product has been deleted',
      };

      expect(result).toEqual(expected);
      expect(mockProductsService.delete).toHaveBeenCalled();
      expect(mockProductsService.delete).toHaveBeenCalledWith(id);
    });
  });
});
