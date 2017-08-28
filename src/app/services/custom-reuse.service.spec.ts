import { TestBed, inject } from '@angular/core/testing';

import { CustomReuseService } from './custom-reuse.service';

describe('CustomReuseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomReuseService]
    });
  });

  it('should be created', inject([CustomReuseService], (service: CustomReuseService) => {
    expect(service).toBeTruthy();
  }));
});
