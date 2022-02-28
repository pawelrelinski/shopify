import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../categories/entities/category.entity';
import { DeepPartial } from 'typeorm';
import {
  IsBoolean,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly shortDescription: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  @Max(1_000_000.0)
  readonly defaultPrice: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  @Max(1_000_000.0)
  readonly promotionPrice?: number;

  @ApiProperty()
  @IsNotEmpty()
  category: Category | DeepPartial<Category> | number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(500)
  readonly quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly producer: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(60)
  readonly expectedDeliveryTime: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  readonly refNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly dataSheet: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly isPublished: boolean;

  @ApiProperty()
  @IsNotEmpty()
  readonly image: any;

  @ApiProperty()
  @IsNotEmpty()
  @IsJSON()
  readonly shippingMethods: string;
}
