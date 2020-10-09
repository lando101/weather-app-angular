import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AQI } from '../models/aqi.model';
import { OpenCurrentWeather } from '../models/open-weather-current.model';
import { WeatherAlerts } from 'src/models/weather-alerts.model';
const routes = {
  quote: (c: CoordinatesContext) =>
    `/nearest_city?lat=${c.latitude}&lon=${c.longitude}&key=876120fd-e122-4145-944b-8b44f8454ce5`,
};

export interface CoordinatesContext {
  // The quote's category: 'dev', 'explicit'...
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherGovService {
  private weatherInfo: BehaviorSubject<any>;
  private currentWeatherData: BehaviorSubject<OpenCurrentWeather>;
  private weatherTheme: BehaviorSubject<string>;
  private timeOfDay: BehaviorSubject<boolean>;
  private airQuality: BehaviorSubject<string>;
  private searchLocation: BehaviorSubject<string>;

  location: CoordinatesContext = {
    latitude: '',
    longitude: '',
  };

  constructor(private httpClient: HttpClient) {
    this.weatherInfo = new BehaviorSubject<any>('');
    this.currentWeatherData = new BehaviorSubject<any>('');
    this.weatherTheme = new BehaviorSubject<any>('');
    this.timeOfDay = new BehaviorSubject<boolean>(false);
    this.airQuality = new BehaviorSubject<any>('');
    this.searchLocation = new BehaviorSubject<any>('');
  }
  // getAirQualityAPIv2(lat: number, long: number): Observable<string> {
  //   let coordinates: CoordinatesContext = {
  //     latitude: '',
  //     longitude: '',
  //   };
  //   coordinates.latitude = lat.toString();
  //   coordinates.longitude = long.toString();
  //   // console.log('TRIED TO GET AIR QUALITY');
  //   return this.httpClient.get(routes.quote(coordinates)).pipe(
  //     map((body: any) => body.data),
  //     catchError(() => of('Error, could not load joke :-('))
  //   );
  // }

  searchNWSWeather(latitude: number, longitude: number): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET');
    headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    const url = 'https://cors-anywhere.herokuapp.com/https://api.weather.gov/points/' + latitude + ',' + longitude;

    let weatherData = this.httpClient.get('https://api.weather.gov/points/' + latitude + ',' + longitude, { headers });
    return weatherData;
  }

  // gather current weather from National Weather Service :: unreliable
  // getCurrentWeather(zone: string): Observable<any> {
  //   const url = 'https://api.weather.gov/zones/forecast/' + zone + '/observations';

  //   let currentWeather = this.httpClient.get(url);
  //   return currentWeather;
  // }

  getWeatherAlerts(state: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET');
    headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    const url = 'https://api.weather.gov/alerts/active?area=' + state;

    let weatherAlerts = this.httpClient.get(url, { headers });

    return weatherAlerts.pipe(
      map((data: WeatherAlerts) => {
        return data;
      })
    );
  }

  // gather current weather from Open Weather API
  getCurrentWeatherBackup(lat: number, lon: number): Observable<any> {
    const url =
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      lat +
      '&lon=' +
      lon +
      '&exclude=minutely&appid=5c602f566c35210c9762bccc013f37da&units=imperial';
    let currentWeather = this.httpClient.get(url);
    return currentWeather.pipe(
      map((data: OpenCurrentWeather) => {
        return data;
      }),
      catchError((error) => {
        alert('SOMETHING WENT WRONG');
        return throwError('Something went wrong');
      })
    );
  }

  getLocationOpenAPI(lat: number, lon: number): Observable<any> {
    const url =
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      lat +
      '&lon=' +
      lon +
      '&exclude=minutely&appid=5c602f566c35210c9762bccc013f37da&units=imperial';
    let currentWeather = this.httpClient.get(url);
    return currentWeather.pipe(
      map((data: OpenCurrentWeather) => {
        return data;
      }),
      catchError((error) => {
        alert('SOMETHING WENT WRONG');
        return throwError('Something went wrong');
      })
    );
  }

  // needs to be moved to own service
  getCovidData(): Observable<any> {
    const url = 'https://api.covidtracking.com/v1/states/current.json';
    let covidResults = this.httpClient.get(url);

    return covidResults.pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error) => {
        alert("Didn't get covid data");
        return 'Could not get covid data';
      })
    );
  }

  // getAirQualityAPI(lat: number, lon: number): Observable<any>{
  //   const url = 'http://api.airvisual.com/v2/nearest_city?lat=' + lat + '&lon=' + lon + '&key=876120fd-e122-4145-944b-8b44f8454ce5'

  //   let airResults = this.httpClient.get(url);

  //   return airResults.pipe(
  //     map((data: any) => {
  //       return data;
  //     }),
  //     catchError((error)=>{
  //       alert("Didn't get covid data");
  //       return('Could not get covid data');
  //     })
  //   )
  // }

  getHourlyForecast(apiUrl: string): Observable<any> {
    const url = apiUrl;
    let forecast = this.httpClient.get(url);

    return forecast;
  }

  setNWSWeatherData(weatherData: any): void {
    this.weatherInfo.next(weatherData);
  }

  getNWSWeatherData(): Observable<any> {
    return this.weatherInfo.asObservable();
  }

  setCurrentWeatherData(weatherData: OpenCurrentWeather): void {
    this.currentWeatherData.next(weatherData);
    // console.log('SET THE CURRENT WEATHER');
  }

  getCurrentWeatherData(): Observable<any> {
    return this.currentWeatherData.asObservable();
  }

  // weather theme
  setWeatherTheme(conditions: string): void {
    this.weatherTheme.next(conditions);
    // console.log('CURRENT WEATHER THEME');
    // console.log(conditions);
  }
  getWeatherTheme(): Observable<any> {
    return this.weatherTheme.asObservable();
  }

  // air quality
  setAirQuality(airQuality: any): void {
    this.airQuality.next(airQuality);
    // console.log('SET THE CURRENT WEATHER');
  }
  getAirQuality(): Observable<any> {
    return this.airQuality.asObservable();
  }

  setTimeofDay(day: boolean): void {
    this.timeOfDay.next(day);
  }

  // search location
  setSearchLocation(location: string): void {
    this.searchLocation.next(location);
  }
  getSearchLocationName(): Observable<any> {
    return this.searchLocation.asObservable();
  }

  // searchWeatherService(location: CoordinatesContext): Observable<string> {
  //   return this.httpClient.get(routes.quote(location)).pipe(
  //     map((body: any) => body.properties),
  //     catchError(() => of('Error, could not load joke :-('))
  //   );
  // }
}
