import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentByAdminComponent } from './view-payment-by-admin.component';

describe('ViewPaymentByAdminComponent', () => {
  let component: ViewPaymentByAdminComponent;
  let fixture: ComponentFixture<ViewPaymentByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaymentByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
