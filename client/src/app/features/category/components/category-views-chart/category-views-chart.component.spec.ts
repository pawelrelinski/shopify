import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryViewsChartComponent } from './category-views-chart.component';

describe('CategoryViewsChartComponent', () => {
  let component: CategoryViewsChartComponent;
  let fixture: ComponentFixture<CategoryViewsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryViewsChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
