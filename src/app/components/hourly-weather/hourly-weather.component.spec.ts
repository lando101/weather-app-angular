import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyWeatherComponent } from './hourly-weather.component';

describe('HourlyWeatherComponent', () => {
  let component: HourlyWeatherComponent;
  let fixture: ComponentFixture<HourlyWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyWeatherComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
