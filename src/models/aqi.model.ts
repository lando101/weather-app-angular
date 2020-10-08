export interface AQI {
  city?: string;
  country?: string;
  current?: {
    pollution?: {
      aqicn?: number;
      aqius?: number;
      maincn?: string;
      mainus?: string;
    };
    weather?: {
      hu?: number;
      ic?: string;
      pr?: number;
      tp?: number;
      ts?: string;
      wd?: number;
      ws?: number;
    };
  };
  state?: string;
}
