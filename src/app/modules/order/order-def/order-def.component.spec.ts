import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDefComponent } from './order-def.component';

describe('OrderDefComponent', () => {
  let component: OrderDefComponent;
  let fixture: ComponentFixture<OrderDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
