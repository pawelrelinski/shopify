import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesManageComponent } from './categories-manage.component';

describe('CategoriesManageComponent', () => {
  let component: CategoriesManageComponent;
  let fixture: ComponentFixture<CategoriesManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesManageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
