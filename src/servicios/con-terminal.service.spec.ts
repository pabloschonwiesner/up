/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConTerminalService } from './con-terminal.service';

describe('Service: ConTerminal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConTerminalService]
    });
  });

  it('should ...', inject([ConTerminalService], (service: ConTerminalService) => {
    expect(service).toBeTruthy();
  }));
});
