import { TestBed, inject } from '@angular/core/testing';

import { WebsocketsService } from './websockets.service';

describe('WebsocketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketsService]
    });
  });

  it('should ...', inject([WebsocketsService], (service: WebsocketsService) => {
    expect(service).toBeTruthy();
  }));
});
