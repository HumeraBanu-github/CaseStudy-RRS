import { TestBed } from '@angular/core/testing';

import { ManageTrainService } from './manage-train.service';

describe('ManageTrainService', () => {
  let service: ManageTrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
