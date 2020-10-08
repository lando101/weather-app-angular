import { TestBed } from '@angular/core/testing';

import { WeatherGovService } from './weather-gov.service';

describe('WeatherGovService', () => {
  let service: WeatherGovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherGovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
