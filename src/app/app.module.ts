import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AgmCoreModule } from '@agm/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { LocationSearchComponent } from './components/location-search/location-search.component';
import { WeatherDashboardComponent } from './components/weather-dashboard/weather-dashboard.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';
import { ParticlesModule } from 'ngx-particle';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    NgbModule,
    ParticlesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqsl5L4RvDDC8kjl00nRaRhHCLp7cFZvI',
      libraries: ['places'],
    }),
    AppRoutingModule,
    // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
