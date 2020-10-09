import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { WeatherResults } from 'src/models/weather-results.model';
import { ForecastPeriod } from 'src/models/weather-periods-hourly.model';
import { WeatherGovService } from 'src/services/weather-gov.service';
import { OpenCurrentWeather } from 'src/models/open-weather-current.model';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss'],
})
export class HourlyWeatherComponent implements OnInit {
  @Input() weatherData: WeatherResults;
  @Input() currentWeatherData: OpenCurrentWeather;
  weatherHourForecast: ForecastPeriod[] = [];
  isLoading = false;

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 4,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 606,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  constructor(private weatherService: WeatherGovService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.currentWeatherData?.hourly?.forEach((hour) => {
      this.themeConvertor(hour);
    });

    this.currentWeatherData?.hourly?.forEach((hour) => {
      let deg = hour.wind_deg;
      if (deg <= 11.25 || deg >= 348.75) {
        hour.wind_deg_string = 'N';
      }
      if (deg > 11.25 && deg <= 33.75) {
        hour.wind_deg_string = 'NNE';
      }
      if (deg > 33.75 && deg <= 56.25) {
        hour.wind_deg_string = 'NE';
      }
      if (deg > 56.25 && deg <= 78.75) {
        hour.wind_deg_string = 'ENE';
      }
      if (deg > 78.75 && deg <= 101.25) {
        hour.wind_deg_string = 'E';
      }
      if (deg > 101.25 && deg <= 123.75) {
        hour.wind_deg_string = 'ESE';
      }
      if (deg > 123.75 && deg <= 146.25) {
        hour.wind_deg_string = 'SE';
      }
      if (deg > 146.25 && deg <= 168.75) {
        hour.wind_deg_string = 'SSE';
      }
      if (deg > 168.75 && deg <= 191.25) {
        hour.wind_deg_string = 'S';
      }
      if (deg > 191.25 && deg <= 213.75) {
        hour.wind_deg_string = 'SSW';
      }
      if (deg > 213.75 && deg <= 236.25) {
        hour.wind_deg_string = 'SW';
      }
      if (deg > 236.25 && deg <= 258.75) {
        hour.wind_deg_string = 'WSW';
      }
      if (deg > 258.75 && deg <= 281.25) {
        hour.wind_deg_string = 'W';
      }
      if (deg > 281.25 && deg <= 303.75) {
        hour.wind_deg_string = 'WNW';
      }
      if (deg > 303.75 && deg <= 326.25) {
        hour.wind_deg_string = 'NW';
      }
      if (deg > 326.25 && deg < 348.75) {
        hour.wind_deg_string = 'NW';
      }
    });
  }

  slickInit(e: any) {
    // console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    // console.log('afterChange');
  }

  beforeChange(e: any) {
    // console.log('beforeChange');
  }

  // windDegConvertor(deg: number){
  //   switch(deg){
  //     case < 11.25: {

  //     }
  //   }
  // }

  themeConvertor(hour: any) {
    switch (hour?.weather[0]?.icon) {
      // day
      case '01d': {
        // console.log('clear sky');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fsunny%5B1%5D.png?alt=media&token=7baa0ed6-94d1-4ddd-82e5-fd1c9b287176';
        hour.night = false;
        break;
      }
      case '02d': {
        // console.log('few clouds');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlysunny%5B1%5D.png?alt=media&token=2e7140b4-546c-4d26-90e5-a6df49e0c86b';
        hour.night = false;
        break;
      }
      case '03d': {
        // console.log('scattered clouds');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlycloudy%5B1%5D.png?alt=media&token=8eec628c-0276-44ad-959f-5206759642b2';
        hour.night = false;
        break;
      }
      case '04d': {
        // console.log('broken clouds');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlycloudy%5B1%5D.png?alt=media&token=8eec628c-0276-44ad-959f-5206759642b2';
        hour.night = false;
        break;
      }
      case '09d': {
        // console.log('shower rain');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancerain%5B1%5D.png?alt=media&token=59dfd17f-0cdb-413d-860c-3eda8c95e430';
        hour.night = false;
        break;
      }
      case '10d': {
        // console.log('rain');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Frain%5B1%5D.png?alt=media&token=c4dba601-4693-424d-8b1c-1497abc258ec';
        hour.night = false;
        break;
      }
      case '11d': {
        // console.log('thunderstorm');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ftstorms%5B1%5D.png?alt=media&token=5f9e0b58-86fe-47da-b781-a0b300dc74f1';
        hour.night = false;
        break;
      }
      case '13d': {
        // console.log('snow');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancesnow.png?alt=media&token=1c0581d1-7e74-4937-a2d2-7af2cbc2b97e';
        hour.night = false;
        break;
      }
      case '50d': {
        // console.log('mist');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ffog%5B1%5D.png?alt=media&token=262f0bcd-5575-44a7-accd-1d0b865a03b5';
        hour.night = false;
        break;
      }

      // night
      case '01n': {
        // console.log('clear sky night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_clear.png?alt=media&token=f70a70a0-d004-48d4-a47d-ccfbe5e2530a';
        hour.night = true;
        break;
      }
      case '02n': {
        // console.log('few clouds night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        hour.night = true;
        break;
      }
      case '03n': {
        // console.log('scattered clouds night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        hour.night = true;
        break;
      }
      case '04n': {
        // console.log('broken clouds night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        hour.night = true;
        break;
      }
      case '09n': {
        // console.log('shower rain night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancerain%5B1%5D.png?alt=media&token=59dfd17f-0cdb-413d-860c-3eda8c95e430';
        hour.night = true;
        break;
      }
      case '10n': {
        // console.log('rain night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Frain%5B1%5D.png?alt=media&token=c4dba601-4693-424d-8b1c-1497abc258ec';
        hour.night = true;
        break;
      }
      case '11n': {
        // console.log('thunderstorm night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ftstorms%5B1%5D.png?alt=media&token=5f9e0b58-86fe-47da-b781-a0b300dc74f1';
        hour.night = true;
        break;
      }
      case '13n': {
        // console.log('snow night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancesnow.png?alt=media&token=1c0581d1-7e74-4937-a2d2-7af2cbc2b97e';
        hour.night = true;
        break;
      }
      case '50n': {
        // console.log('mist night');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ffog%5B1%5D.png?alt=media&token=262f0bcd-5575-44a7-accd-1d0b865a03b5';
        hour.night = true;
        break;
      }
      default: {
        // console.log('Invalid choice');
        hour.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Funknown%5B1%5D.png?alt=media&token=ee7488b6-1195-496f-9c85-db9d22b10319';
        hour.night = false;
        break;
      }
    }
  }
}
