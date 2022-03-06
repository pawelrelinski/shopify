import { ProductsService } from './products.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from '../categories/categories.service';
import { CategoryViewService } from '../categories/category-view.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductView } from './entities/product-view.entity';
import { Category } from '../categories/entities/category.entity';

describe('ProductsService', () => {
  const categoryFormatName = 'solar-panels';
  const categoryDto = {
    name: 'Solar panels',
    formatName: categoryFormatName,
    description: 'A solar panel',
    heroIconAsSvg: '',
    createdAt: '2022-02-09T18:47:37.000Z',
  };
  const category = { id: 1, ...categoryDto };
  const categories = [{ ...category }, { id: 2, ...categoryDto }];

  const productDto = {
    name: 'testing product',
    description: ' testing product description',
    defaultPrice: 99.99,
    category: 3,
    isDeleted: false,
    quantity: 3,
    producer: 'Testing Corporation',
    expectedDeliveryTime: 5,
    refNumber: 'DWA-123DA',
    dataSheet: JSON.stringify({ key: 'key1', value: 'val1' }),
    isPublished: true,
    image: 'BmKo',
  };
  const products = [
    { id: 1, ...productDto },
    { id: 2, ...productDto },
    { id: 3, ...productDto },
  ];

  let productsService: ProductsService;
  let categoriesService: CategoriesService;
  let categoryViewService: CategoryViewService;

  let productRepository: Repository<Product>;
  let productViewRepository: Repository<ProductView>;

  const mockCategoriesService = {
    findByFormatName: jest.fn((categoryFormatName: string) => {
      return Promise.resolve(
        categories.find(
          (category: Category | any) =>
            category.formatName === categoryFormatName,
        ),
      );
    }),
    findById: jest.fn((id: number) => {
      return Promise.resolve(
        categories.find((category: Category | any) => category.id === id),
      );
    }),
  };
  const mockCategoryViewService = {
    addToCategory: jest.fn((category: Category | any) => Promise.resolve()),
  };

  const mockProductRepository = {
    findOne: jest.fn().mockImplementation(async (id: string) => {
      const product = products.find((product) => product.id.toString() === id);
      product.isDeleted = true;
      return Promise.resolve(product);
    }),
    count: jest
      .fn()
      .mockImplementation((conditions?: any) =>
        Promise.resolve(products.length),
      ),
    save: jest
      .fn()
      .mockImplementation(async (product: CreateProductDto | any) => {
        return Promise.resolve({ id: product.id, ...product });
      }),
    findAll: jest.fn().mockImplementation((query: any) => products),
    delete: jest.fn().mockImplementation((id: string) => {
      const product = products.find((product) => product.id.toString() === id);
      product.isDeleted = true;
      return product;
    }),
  };
  const mockViewsRepository = {
    save: jest
      .fn()
      .mockImplementation((view: ProductView | any) => Promise.resolve()),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductRepository,
        },
        {
          provide: getRepositoryToken(ProductView),
          useValue: mockViewsRepository,
        },
        {
          provide: CategoriesService,
          useValue: mockCategoriesService,
        },
        {
          provide: CategoryViewService,
          useValue: mockCategoryViewService,
        },
      ],
    }).compile();

    productRepository = moduleRef.get<Repository<Product>>(
      getRepositoryToken(Product),
    );
    productViewRepository = moduleRef.get<Repository<ProductView>>(
      getRepositoryToken(ProductView),
    );

    categoriesService = moduleRef.get<CategoriesService>(CategoriesService);
    categoryViewService =
      moduleRef.get<CategoryViewService>(CategoryViewService);

    productsService = moduleRef.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productsService).toBeDefined();
  });

  describe('delete', () => {
    it('should set isDeleted to true in product and return them', async () => {
      const id = 1;
      const result = await productsService.delete(id.toString());
      const product = products.find(
        (product) => product.id.toString() === id.toString(),
      );
      product.isDeleted = true;

      expect(result).toEqual(product);
    });
  });
});
