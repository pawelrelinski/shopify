import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@features/product/services';
import { NotificationService } from '@features/notification/services';
import { UntypedFormBuilder } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

export abstract class ProductCreateFormInjectors {
  protected readonly activatedRoute = inject(ActivatedRoute);
  protected readonly router = inject(Router);
  protected readonly productService = inject(ProductService);
  protected readonly notificationService = inject(NotificationService);
  protected readonly fb = inject(UntypedFormBuilder);
  protected readonly viewport = inject(ViewportScroller);
}
