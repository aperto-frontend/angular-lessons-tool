import { TestBed, inject } from '@angular/core/testing';

import { DescriptionsService } from './descriptions.service';

describe('DescriptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DescriptionsService]
    });
  });

  it('should ...', inject([DescriptionsService], (service: DescriptionsService) => {
    expect(service).toBeTruthy();
  }));
});
