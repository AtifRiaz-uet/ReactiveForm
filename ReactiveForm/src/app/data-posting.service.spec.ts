import { TestBed } from '@angular/core/testing';

import { DataPostingService } from './data-posting.service';

describe('DataPostingService', () => {
  let service: DataPostingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPostingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
