import { TestBed } from '@angular/core/testing';

import { ManageReservationService } from './manage-reservation.service';

describe('ManageReservationService', () => {
  let service: ManageReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
