import { TestBed } from '@angular/core/testing';

import { YahooWeatherService } from '../services/yahoo-weather.service';

describe('YahooWeatherService', () => {
  let service: YahooWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YahooWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
