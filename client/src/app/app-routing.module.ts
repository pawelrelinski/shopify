import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@pages/customer/home-page/home-page.component').then((c) => c.HomePageComponent),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@pages/customer/products-page/products-page.module').then(
        (m) => m.ProductsPageModule
      ),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('@pages/customer/sign-in-page/sign-in-page.component').then(
        (c) => c.SignInPageComponent
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('@pages/customer/sign-up-page/sign-up-page.component').then(
        (c) => c.SignUpPageComponent
      ),
  },
  {
    path: 'shopping-cart',
    loadComponent: () =>
      import('@pages/customer/shopping-cart-page/shopping-cart-page.component').then(
        (c) => c.ShoppingCartPageComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('@pages/customer/checkout-page/checkout-page.component').then(
        (c) => c.CheckoutPageComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'articles',
    loadComponent: () =>
      import('@pages/customer/articles-page/articles-page.component').then(
        (c) => c.ArticlesPageComponent
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('@pages/customer/faq-page/faq-page.component').then((c) => c.FaqPageComponent),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('@pages/customer/pricing-page/pricing-page.component').then(
        (c) => c.PricingPageComponent
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@pages/customer/profile-page/profile-page.module').then((m) => m.ProfilePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('@pages/admin/admin-pages.module').then((m) => m.AdminPagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('@pages/customer/not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
