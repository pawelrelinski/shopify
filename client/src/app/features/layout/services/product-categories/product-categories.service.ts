import {Injectable} from '@angular/core';

export interface Category {
  clothes: Array<string>;
  accessories: Array<string>;
  brands: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {
  private categories: { men: Category } & { women: Category } = {
    men: {
      clothes: ['tops', 'pants', 'sweaters', 't-shirts', 'jackets', 'activewear'],
      accessories: ['watches', 'wallets', 'bags', 'sunglasses', 'hats', 'bags'],
      brands: ['counterfeit', 'full nelson', 'my way']
    },
    women: {
      clothes: ['tops', 'dresses', 'pants', 'denim', 'sweaters', 't-shirts', 'jackets', 'activewear'],
      accessories: ['watches', 'wallets', 'bags', 'sunglasses', 'hats', 'bags'],
      brands: ['counterfeit', 'full nelson', 'my way']
    }
  };

  public getAllCategories(): { men: Category } & { women: Category } {
    return {
      men: this.getMenCategory(),
      women: this.getWomenCategory()
    };
  }

  public getMenCategory(): Category {
    return this.categories.men;
  }

  public getWomenCategory(): Category {
    return this.categories.women;
  }
}
