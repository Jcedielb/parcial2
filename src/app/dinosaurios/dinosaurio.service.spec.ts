/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DinosaurioService } from './dinosaurio.service';

describe('Dinosaurio: Dinosaurio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosaurioService]
    });
  });

  it('should ...', inject([DinosaurioService], (service: DinosaurioService) => {
    expect(service).toBeTruthy();
  }));
});
