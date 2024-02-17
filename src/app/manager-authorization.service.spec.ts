import { TestBed } from '@angular/core/testing';

import { ManagerAuthorizationService } from './manager-authorization.service';

describe('ManagerAuthorizationService', () => {
  let service: ManagerAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
