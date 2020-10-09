import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
// import { LocationSearchComponent } from '@app/components/location-search/location-search.component';
import { WeatherDashboardComponent } from '@app/components/weather-dashboard/weather-dashboard.component';
import { CurrentWeatherComponent } from '@app/components/current-weather/current-weather.component';
import { HourlyWeatherComponent } from '@app/components/hourly-weather/hourly-weather.component';
import { DailyWeatherComponent } from '@app/components/daily-weather/daily-weather.component';
import { TemperatureConverterPipe } from '../pipes/temperature-converter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CovidDashboardComponent } from '../components/covid-dashboard/covid-dashboard.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { WeatherAlertComponent, WeatherAlertSheetComponent } from '../components/weather-alert/weather-alert.component';
// import { WeatherAlertSheetComponent } from '../components/weather-alert-sheet/weather-alert-sheet.component';

// import { NgxLoadingModule } from 'ngx-loading';
// import { ParticlesModule } from 'ngx-particle';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    SlickCarouselModule,
    FontAwesomeModule,
    NgbModule,
    NgxGaugeModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [
    // LoaderComponent,
    WeatherDashboardComponent,
    CurrentWeatherComponent,
    HourlyWeatherComponent,
    DailyWeatherComponent,
    TemperatureConverterPipe,
    CovidDashboardComponent,
    // WeatherAlertComponent,
    // WeatherAlertSheetComponent
    // LocationSearchComponent,
  ],
  exports: [
    // LoaderComponent,
    WeatherDashboardComponent,
    CurrentWeatherComponent,
    HourlyWeatherComponent,
    DailyWeatherComponent,
    TemperatureConverterPipe,
    CovidDashboardComponent,
    // WeatherAlertComponent,
    // WeatherAlertSheetComponent
    // LocationSearchComponent,
  ],
  // entryComponents: [WeatherAlertSheetComponent, WeatherAlertComponent],
  // bootstrap: [WeatherAlertComponent],

  // providers: [WeatherAlertSheetComponent]
})
export class SharedModule {}
