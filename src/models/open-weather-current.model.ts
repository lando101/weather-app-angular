// export interface OpenCurrentWeather {
//   id?: number;
//   main?: {
//     feels_like?: number,
//     humidity?: number,
//     pressure?: number,
//     temp?: number,
//     temp_max?: number,
//     temp_min?: number
//   },
//   name: string,
//   weather: [{
//     description?: string,
//     icon?: string,
//     id?: number,
//     main?: string
//   }],
//   wind?: {
//     deg?: number,
//     speed?: number
//   }
//   ;
// }

export interface OpenCurrentWeather {
  current: {
    dt: number;
    clouds: number;
    dew_point: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: [
      {
        description: string;
        icon: string;
        id: number;
        main: string;
      }
    ];
    wind_deg: number;
    wind_speed: number;
  };
  daily: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      humidity: number;
      pop: number;
      pressure: number;
      rain: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
      uvi: number;
      weather: [
        {
          description: string;
          icon: string;
          id: number;
          main: string;
        }
      ];
      wind_deg: number;
      wind_speed: number;
      iconUrl?: string;
    }
  ];
  hourly: [
    {
      clouds: string;
      dew_point: number;
      dt: number;
      feels_like: number;
      humidity: number;
      pop: number;
      pressure: number;
      temp: number;
      visibility: number;
      weather: [
        {
          description: string;
          icon: string;
          id: number;
          main: string;
        }
      ];
      wind_deg: number;
      wind_speed: number;
      wind_deg_string?: string;
      iconUrl?: string;
      night?: boolean;
    }
  ];
}
