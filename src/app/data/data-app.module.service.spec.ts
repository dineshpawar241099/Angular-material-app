import { TestBed } from '@angular/core/testing';

import { DataApp.ModuleService } from './data-app.module.service';

describe('DataApp.ModuleService', () => {
  let service: DataApp.ModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataApp.ModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
