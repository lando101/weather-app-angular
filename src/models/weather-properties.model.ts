export interface WeatherProperties {
  id?: string;
  properties?: string;
  county?: string;
  fireWeatherZone?: string;
  forecast?: string;
  forecastGridData?: string;
  forecastHourly?: string;
  forecastOffice?: string;
  forecastZone?: string;
  gridX?: number;
  gridY?: number;
  radarStation?: string;
  relativeLocation?: RelativeLocation;
  // timeZone?: string;
}

export interface RelativeLocation {
  geometry?: any;
  properties?: Prop;
}

export interface Prop {
  city?: string;
  state?: string;
  distance?: number;
}
