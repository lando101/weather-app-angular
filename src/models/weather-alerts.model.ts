export interface WeatherAlerts {
  title: string;
  type: string;
  updated: string;
  features: [
    {
      geometry: any;
      id: string;
      type: string;
      properties: {
        certainty: string;
        description: string;
        effective: string;
        ends: string;
        event: string;
        expires: string;
        geocode: {
          UGC: string[];
        };
        headline: string;
        insturction: string;
        messageType: string;
        response: string;
        severity: string;
        urgency: string;
      };
    }
  ];
}
