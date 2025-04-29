import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDefComponent } from './customer-def.component';

describe('CustomerDefComponent', () => {
  let component: CustomerDefComponent;
  let fixture: ComponentFixture<CustomerDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
