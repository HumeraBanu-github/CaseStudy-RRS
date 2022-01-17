import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainByIdComponent } from './view-train-by-id.component';

describe('ViewTrainByIdComponent', () => {
  let component: ViewTrainByIdComponent;
  let fixture: ComponentFixture<ViewTrainByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrainByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrainByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
