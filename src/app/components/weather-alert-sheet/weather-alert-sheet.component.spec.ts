import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlertSheetComponent } from './weather-alert-sheet.component';

describe('WeatherAlertSheetComponent', () => {
  let component: WeatherAlertSheetComponent;
  let fixture: ComponentFixture<WeatherAlertSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherAlertSheetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
