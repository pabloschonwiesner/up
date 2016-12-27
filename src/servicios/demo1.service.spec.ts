/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Demo1Service } from './demo1.service';

describe('Service: Demo1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Demo1Service]
    });
  });

  it('should ...', inject([Demo1Service], (service: Demo1Service) => {
    expect(service).toBeTruthy();
  }));
});
