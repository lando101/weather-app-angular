import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { OpenCurrentWeather } from 'src/models/open-weather-current.model';
import { WeatherResults } from 'src/models/weather-results.model';
import { WeatherGovService } from 'src/services/weather-gov.service';
import { CurrentWeather } from '../../../models/weather-current.model';
import { AQI } from '../../../models/aqi.model';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() weatherData: WeatherResults;
  @Input() currentWeatherData: OpenCurrentWeather;
  @Input() airQuality: AQI;
  currentWeather: CurrentWeather;
  weatherZone = '';
  locationName = '';
  isLoading = false;

  gaugeTypeUV = 'semi';
  gaugeValueUV = 0;
  gaugeLabelUV = 'UV Index';
  gaugeAppendTextUV = 'UV';
  gaugeSizeUV = 95;
  gagugeThickUV = 3;
  gaugeMaxUV = 11;
  gagueTypeUV = 'full';
  gaugeCapUV = 'round';
  thresholdConfigUV = {
    '0': { color: '#31bf4f' },
    '3': { color: '#FDD835' },
    '6': { color: '#FFB301' },
    '8': { color: '#D1394A' },
  };

  gaugeTypeAQI = 'semi';
  gaugeValueAQI = 0;
  gaugeLabelAQI = 'Pollution';
  gaugeAppendTextAQI = 'AQI';
  gaugeSizeAQI = 95;
  gagugeThickAQI = 3;
  gaugeMaxAQI = 500;
  gagueTypeAQI = 'full';
  gaugeCapAQI = 'round';
  thresholdConfigAQI = {
    '0': { color: '#31bf4f' },
    '51': { color: '#FDD835' },
    '101': { color: '#FFB301' },
    '151': { color: '#D1394A' },
  };

  iconUrl =
    'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fcloudy%5B1%5D.png?alt=media&token=d72e5964-62fb-4acb-95bf-f67febbccb57';

  constructor(private weatherService: WeatherGovService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherTheme().subscribe((data) => {
      // console.log(data);
      // console.log('THEME');
      this.themeConvertor(data);
    });
    this.weatherService.getSearchLocationName().subscribe((data) => {
      if (data) {
        this.locationName = data;
      } else {
        this.locationName = 'Whitefish, MT, USA';
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.isLoading = true;
    // console.log(this.airQuality);
    // console.log('CURRENT WEATHER AIR QUALITY!!!!!!!!!!!!!')
    let zoneUrl = this.weatherData.properties.forecastZone;
    let tempCurrentWeather: any;
    this.weatherZone = zoneUrl?.substr(39, 6); // retreive weather zone :: used to request current conditions

    this.gaugeValueUV = this.currentWeatherData?.current.uvi;
    // if(this.airQuality.current.pollution.aqius){
    this.gaugeValueAQI = this.airQuality?.current?.pollution?.aqius;
    // }
  }

  themeConvertor(themeId: string) {
    // if(themeId.substr(themeId.length))
    let theme = 'd';

    if (themeId.substr(themeId.length - 1, 1) === 'd') {
      this.themeService.setTheme(true);
      // console.log('LIGHT THEME');
    } else if (themeId.substr(themeId.length - 1, 1) === 'n') {
      this.themeService.setTheme(false);
      // console.log('DARK THEME');
    }

    switch (themeId) {
      // day
      case '01d': {
        //  console.log("clear sky");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fsunny%5B1%5D.png?alt=media&token=7baa0ed6-94d1-4ddd-82e5-fd1c9b287176';
        break;
      }
      case '02d': {
        //  console.log("few clouds");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlysunny%5B1%5D.png?alt=media&token=2e7140b4-546c-4d26-90e5-a6df49e0c86b';
        break;
      }
      case '03d': {
        //  console.log("scattered clouds");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlycloudy%5B1%5D.png?alt=media&token=8eec628c-0276-44ad-959f-5206759642b2';
        break;
      }
      case '04d': {
        //  console.log("broken clouds");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fmostlycloudy%5B1%5D.png?alt=media&token=8eec628c-0276-44ad-959f-5206759642b2';
        break;
      }
      case '09d': {
        // console.log("shower rain");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancerain%5B1%5D.png?alt=media&token=59dfd17f-0cdb-413d-860c-3eda8c95e430';
        break;
      }
      case '10d': {
        // console.log("rain");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Frain%5B1%5D.png?alt=media&token=c4dba601-4693-424d-8b1c-1497abc258ec';
        break;
      }
      case '11d': {
        // console.log("thunderstorm");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ftstorms%5B1%5D.png?alt=media&token=5f9e0b58-86fe-47da-b781-a0b300dc74f1';
        break;
      }
      case '13d': {
        // console.log("snow");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancesnow.png?alt=media&token=1c0581d1-7e74-4937-a2d2-7af2cbc2b97e';
        break;
      }
      case '50d': {
        // console.log("mist");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ffog%5B1%5D.png?alt=media&token=262f0bcd-5575-44a7-accd-1d0b865a03b5';
        break;
      }

      // night
      case '01n': {
        // console.log("clear sky night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_clear.png?alt=media&token=f70a70a0-d004-48d4-a47d-ccfbe5e2530a';
        break;
      }
      case '02n': {
        // console.log("few clouds night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        break;
      }
      case '03n': {
        // console.log("scattered clouds night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        break;
      }
      case '04n': {
        // console.log("broken clouds night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fnt_partlycloudy%5B1%5D.png?alt=media&token=f44b9148-33a0-4cf6-b639-e5aabe9b4c43';
        break;
      }
      case '09n': {
        // console.log("shower rain night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancerain%5B1%5D.png?alt=media&token=59dfd17f-0cdb-413d-860c-3eda8c95e430';
        break;
      }
      case '10n': {
        // console.log("rain night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Frain%5B1%5D.png?alt=media&token=c4dba601-4693-424d-8b1c-1497abc258ec';
        break;
      }
      case '11n': {
        // console.log("thunderstorm night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ftstorms%5B1%5D.png?alt=media&token=5f9e0b58-86fe-47da-b781-a0b300dc74f1';
        break;
      }
      case '13n': {
        // console.log("snow night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Fchancesnow.png?alt=media&token=1c0581d1-7e74-4937-a2d2-7af2cbc2b97e';
        break;
      }
      case '50n': {
        // console.log("mist night");
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Ffog%5B1%5D.png?alt=media&token=262f0bcd-5575-44a7-accd-1d0b865a03b5';
        break;
      }
      default: {
        console.log('Invalid choice');
        this.iconUrl =
          'https://firebasestorage.googleapis.com/v0/b/weather-app-d5f91.appspot.com/o/weather-icons%2Funknown%5B1%5D.png?alt=media&token=ee7488b6-1195-496f-9c85-db9d22b10319';
        break;
      }
    }
  }
}
