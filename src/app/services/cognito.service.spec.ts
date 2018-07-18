import { TestBed, inject } from '@angular/core/testing';

import { CognitoUtil } from './cognito.service';

describe('CognitoUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitoUtil]
    });
  });

  it('should be created', inject([CognitoUtil], (service: CognitoUtil) => {
    expect(service).toBeTruthy();
  }));
});
