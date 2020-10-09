import { Component, OnInit } from '@angular/core';
import { WeatherGovService } from 'src/services/weather-gov.service';
import { WeatherResults } from '../../../models/weather-results.model';
import * as moment from 'moment';
import { OpenCurrentWeather } from 'src/models/open-weather-current.model';
import { AQI } from '../../../models/aqi.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent implements OnInit {
  weatherResults: WeatherResults;
  openWeatherResults: OpenCurrentWeather;
  currentWeatherData: OpenCurrentWeather;
  aqiResults: AQI;
  now = moment().format('MMMM Do YYYY, h:mm a');

  isLoading = false;
  constructor(private weatherService: WeatherGovService) {}

  ngOnInit(): void {
    this.weatherService.getNWSWeatherData().subscribe((data) => {
      // console.log(data);
      // console.log('WEATHER DASHBOARD GOT DATA');
      this.weatherResults = {
        id: data.id,
        properties: {
          county: data.properties?.county,
          radarStation: data.properties?.radarStation,
          gridX: data.properites?.gridX,
          gridY: data.properites?.gridY,
          fireWeatherZone: data.properties?.fireWeatherZone,
          forecast: data.properties?.forecast,
          forecastHourly: data.properties?.forecastHourly,
          forecastGridData: data.properties?.forecastGridData,
          forecastZone: data.properties?.forecastZone,
          relativeLocation: {
            properties: {
              city: data.properties?.relativeLocation?.properties?.city,
              state: data.properties?.relativeLocation?.properties?.state,
            },
          },
        },
      };
      // console.log('WEATHER RESULTS');
      // console.log(this.weatherResults);
    });

    this.weatherService.getCurrentWeatherData().subscribe((data) => {
      this.isLoading = true;
      if (data) {
        this.isLoading = false;
        this.currentWeatherData = data;
      }
    });

    this.weatherService.getAirQuality().subscribe((data) => {
      this.aqiResults = data;
    });

    // this.weatherService.getCurrentWeatherData().subscribe(data =>{
    //   console.log('WEATHER DASH GOT OPEN WEATHER');
    //   this.openWeatherResults = data;
    //   console.log(this.openWeatherResults);
    // })
  }
}
