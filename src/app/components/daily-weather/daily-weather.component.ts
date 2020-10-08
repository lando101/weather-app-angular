import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { OpenCurrentWeather } from 'src/models/open-weather-current.model';
@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss'],
})
export class DailyWeatherComponent implements OnInit {
  @Input() currentWeatherData: OpenCurrentWeather;
  panelOpenState = false;
  constructor() {}

  gaugeTypeUV = 'semi';
  gaugeValueUV = 0;
  gaugeLabelUV = 'UV Index';
  gaugeAppendTextUV = 'UV';
  gaugeSizeUV = 65;
  gagugeThickUV = 3;
  gaugeMaxUV = 11;
  gagueTypeUV = 'semi';
  gaugeCapUV = 'round';
  thresholdConfigUV = {
    '0': { color: '#31bf4f' },
    '3': { color: '#FDD835' },
    '6': { color: '#FFB301' },
    '8': { color: '#D1394A' },
  };

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('DAILY');
    console.log(this.currentWeatherData?.daily);
    this.gaugeValueUV = this.currentWeatherData?.daily[0].uvi;
    this.currentWeatherData?.daily?.forEach((day) => {
      this.themeConvertor(day);
    });
    console.log(this.currentWeatherData?.daily);
  }
  themeConvertor(day: any) {
    switch (day?.weather[0]?.icon) {
      // day
      case '01d': {
        //  console.log("clear sky");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fsunny%5B1%5D.png?alt=media&token=7baa0ed6-94d1-4ddd-82e5-fd1c9b287176';
        break;
      }
      case '02d': {
        //  console.log("few clouds");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlysunny%5B1%5D.png?alt=media&token=2e7140b4-546c-4d26-90e5-a6df49e0c86b';
        break;
      }
      case '03d': {
        //  console.log("scattered clouds");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlycloudy%5B1%5D.png?alt=media&token=8eec628c-0276-44ad-959f-5206759642b2';
        break;
      }
      case '04d': {
        //  console.log("broken clouds");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlycloudy%5B1%5D.png?alt=media&token=8eec628c-0276-44ad-959f-5206759642b2';
        break;
      }
      case '09d': {
        // console.log("shower rain");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancerain%5B1%5D.png?alt=media&token=59dfd17f-0cdb-413d-860c-3eda8c95e430';
        break;
      }
      case '10d': {
        // console.log("rain");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Frain%5B1%5D.png?alt=media&token=c4dba601-4693-424d-8b1c-1497abc258ec';
        break;
      }
      case '11d': {
        // console.log("thunderstorm");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ftstorms%5B1%5D.png?alt=media&token=5f9e0b58-86fe-47da-b781-a0b300dc74f1';
        break;
      }
      case '13d': {
        // console.log("snow");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancesnow.png?alt=media&token=1c0581d1-7e74-4937-a2d2-7af2cbc2b97e';
        break;
      }
      case '50d': {
        // console.log("mist");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ffog%5B1%5D.png?alt=media&token=262f0bcd-5575-44a7-accd-1d0b865a03b5';
        break;
      }

      // night
      case '01n': {
        // console.log("clear sky night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_clear.png?alt=media&token=f70a70a0-d004-48d4-a47d-ccfbe5e2530a';
        break;
      }
      case '02n': {
        // console.log("few clouds night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        break;
      }
      case '03n': {
        // console.log("scattered clouds night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        break;
      }
      case '04n': {
        // console.log("broken clouds night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        break;
      }
      case '09n': {
        // console.log("shower rain night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancerain%5B1%5D.png?alt=media&token=59dfd17f-0cdb-413d-860c-3eda8c95e430';
        break;
      }
      case '10n': {
        // console.log("rain night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Frain%5B1%5D.png?alt=media&token=c4dba601-4693-424d-8b1c-1497abc258ec';
        break;
      }
      case '11n': {
        // console.log("thunderstorm night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ftstorms%5B1%5D.png?alt=media&token=5f9e0b58-86fe-47da-b781-a0b300dc74f1';
        break;
      }
      case '13n': {
        // console.log("snow night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancesnow.png?alt=media&token=1c0581d1-7e74-4937-a2d2-7af2cbc2b97e';
        break;
      }
      case '50n': {
        // console.log("mist night");
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ffog%5B1%5D.png?alt=media&token=262f0bcd-5575-44a7-accd-1d0b865a03b5';
        break;
      }
      default: {
        console.log('Invalid choice');
        day.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Funknown%5B1%5D.png?alt=media&token=ee7488b6-1195-496f-9c85-db9d22b10319';
        break;
      }
    }
  }
}
