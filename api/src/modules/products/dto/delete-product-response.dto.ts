import { HttpStatus } from '@nestjs/common';

export interface DeleteProductResponseDto {
  status: HttpStatus;
  message: string;
}
