import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDefComponent } from './product-def.component';

describe('ProductDefComponent', () => {
  let component: ProductDefComponent;
  let fixture: ComponentFixture<ProductDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
