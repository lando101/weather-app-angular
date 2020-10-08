import { WeatherProperties } from './weather-properties.model';

export interface WeatherResults {
  id?: string;
  properties?: WeatherProperties;
  type?: string;
}
