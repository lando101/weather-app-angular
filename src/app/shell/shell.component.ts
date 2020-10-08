import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators';

import { untilDestroyed } from '@core';
import { WeatherGovService } from 'src/services/weather-gov.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  theme = 'day-clear';
  rain = false;
  snow = false;
  fewClouds = false;
  fog = false;
  day = false;
  constructor(private media: MediaObserver, private weatherService: WeatherGovService) {}

  ngOnInit() {
    // Automatically close side menu on screens > sm breakpoint
    this.media
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) =>
          changes.some((change) => change.mqAlias !== 'xs' && change.mqAlias !== 'sm')
        ),
        untilDestroyed(this)
      )
      .subscribe(() => this.sidenav?.close());

    this.weatherService.getWeatherTheme().subscribe((data) => {
      console.log(data);
      console.log('THEME');
      this.themeConvertor(data);
    });

    this.weatherService.getCovidData().subscribe((data) => {
      console.log(data);
      console.log('COVID DATA');
    });

    // this.weatherService.getWeatherTheme().subscribe(data => {
    //   if (data){
    //     this.day = data;
    //   }
    // })
  }

  themeConvertor(themeId: string) {
    switch (themeId) {
      case '01d': {
        console.log('clear sky');
        this.theme = 'day-clear';
        this.rain = false;
        this.snow = false;
        this.fewClouds = false;
        this.day = true;
        this.fog = false;
        break;
      }
      case '02d': {
        console.log('few clouds');
        this.theme = 'day-clear';
        this.rain = false;
        this.snow = false;
        this.fewClouds = true;
        this.day = true;
        this.fog = false;
        console.log(this.day + 'DAY');
        break;
      }
      case '03d': {
        console.log('scattered clouds');
        this.theme = 'day-clear';
        this.rain = false;
        this.snow = false;
        this.fewClouds = true;
        this.day = true;
        this.fog = false;

        break;
      }
      case '04d': {
        console.log('broken clouds');
        this.theme = 'day-clear';
        this.rain = false;
        this.snow = false;
        this.fewClouds = true;
        this.day = true;
        this.fog = false;

        break;
      }
      case '09d': {
        console.log('shower rain');
        this.theme = 'rainy';
        this.rain = true;
        this.snow = false;
        this.fewClouds = false;
        this.day = true;
        this.fog = false;

        break;
      }
      case '10d': {
        console.log('rain');
        this.theme = 'rainy';
        this.rain = true;
        this.snow = false;
        this.fewClouds = false;
        this.day = true;
        this.fog = false;

        break;
      }
      case '11d': {
        console.log('thunderstorm');
        this.theme = 'stormy';
        this.rain = true;
        this.snow = false;
        this.fewClouds = false;
        this.day = true;
        this.fog = false;

        break;
      }
      case '13d': {
        console.log('snow');
        this.theme = 'rainy';
        this.rain = false;
        this.snow = true;
        this.fewClouds = false;
        this.day = true;
        this.fog = false;

        break;
      }
      case '50d': {
        console.log('mist');
        this.theme = 'rainy';
        this.rain = false;
        this.snow = false;
        this.fewClouds = false;
        this.day = true;
        this.fog = true;

        break;
      }
      // night
      case '01n': {
        console.log('clear sky night');
        this.theme = 'night';
        this.rain = false;
        this.snow = false;
        this.fewClouds = false;
        this.day = false;
        this.fog = false;

        break;
      }
      case '02n': {
        console.log('few clouds night');
        this.theme = 'night';
        this.rain = false;
        this.snow = false;
        this.fewClouds = true;
        this.day = false;
        this.fog = false;

        break;
      }
      case '03n': {
        console.log('scattered clouds night');
        this.theme = 'night';
        this.rain = false;
        this.snow = false;
        this.fewClouds = true;
        this.day = false;
        this.fog = false;

        break;
      }
      case '04n': {
        console.log('broken clouds night');
        this.theme = 'night';
        this.rain = false;
        this.snow = false;
        this.fewClouds = true;
        this.day = false;
        this.fog = false;

        break;
      }
      case '09n': {
        console.log('shower rain night');
        this.theme = 'night';
        this.rain = true;
        this.snow = false;
        this.fewClouds = false;
        this.day = false;
        this.fog = false;

        break;
      }
      case '10n': {
        console.log('rain night');
        this.theme = 'night';
        this.rain = true;
        this.snow = false;
        this.fewClouds = false;
        this.day = false;
        this.fog = false;

        break;
      }
      case '11n': {
        console.log('thunderstorm night');
        this.theme = 'night';
        this.rain = true;
        this.snow = false;
        this.fewClouds = false;
        this.day = false;
        this.fog = false;
        break;
      }
      case '13n': {
        console.log('snow night');
        this.rain = false;
        this.snow = true;
        this.fewClouds = false;
        this.day = false;
        this.fog = false;
        break;
      }
      case '50n': {
        console.log('mist night');
        this.theme = 'rainy';
        this.rain = true;
        this.snow = true;
        this.fewClouds = false;
        this.day = false;
        this.fog = true;
        break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }

  ngOnDestroy() {
    // Needed for automatic unsubscribe with untilDestroyed
  }
}
