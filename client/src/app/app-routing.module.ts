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
    loadChildren: () =>
      import('./pages/customer/home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/customer/products-page/products-page.module').then(
        (m) => m.ProductsPageModule
      ),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/customer/sign-in-page/sign-in-page.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/customer/sign-up-page/sign-up-page.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./pages/customer/shopping-cart-page/shopping-cart-page.module').then(
        (m) => m.ShoppingCartPageModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/customer/checkout-page/checkout-page.module').then(
        (m) => m.CheckoutPageModule
      ),
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./pages/customer/articles-page/articles-page.module').then(
        (m) => m.ArticlesPageModule
      ),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./pages/customer/faq-page/faq-page.module').then((m) => m.FaqPageModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pages/customer/pricing-page/pricing-page.module').then((m) => m.PricingPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/customer/profile-page/profile-page.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin-pages.module').then((m) => m.AdminPagesModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/customer/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
