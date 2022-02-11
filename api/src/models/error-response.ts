import { HttpStatus } from '@nestjs/common';

export interface ErrorResponse {
  message?: string;
  statusCode?: number | HttpStatus;
}
