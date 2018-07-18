import { TestBed, inject } from '@angular/core/testing';

import { AwsUtil } from './aws.service';

describe('AwsUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwsUtil]
    });
  });

  it('should be created', inject([AwsUtil], (service: AwsUtil) => {
    expect(service).toBeTruthy();
  }));
});
