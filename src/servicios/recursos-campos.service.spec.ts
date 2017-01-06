/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecursosCamposService } from './recursos-campos.service';

describe('Service: RecursosCampos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecursosCamposService]
    });
  });

  it('should ...', inject([RecursosCamposService], (service: RecursosCamposService) => {
    expect(service).toBeTruthy();
  }));
});
