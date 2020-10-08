import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';

declare var $: any;

const routes = {
  quote: (c: RandomQuoteContext) => `/forecastrss?location=${c.category}`,
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}
@Injectable({
  providedIn: 'root',
})
export class YahooWeatherService {
  time: string = '';
  location: RandomQuoteContext = {
    category: 'sunnyvale,ca',
  };

  constructor(private httpClient: HttpClient) {}

  initWeatherService() {
    var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    var method = 'GET';
    var app_id = '14dtQR7l';
    var consumer_key =
      'dj0yJmk9YUhMYTB5RHUwa3g5JmQ9WVdrOU1UUmtkRkZTTjJ3bWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTVi';
    var consumer_secret = 'b82315938ffe365f3ca8efc9f64032128897ccb0';
    var concat = '&';
    var query = { location: 'sunnyvale,ca', format: 'json' };
    var oauth = {
      oauth_consumer_key: consumer_key,
      oauth_nonce: Math.random().toString(36).substring(2),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: parseInt((new Date().getTime() / 1000).toLocaleString()),
      oauth_version: '1.0',
    };

    var merged = {};
    $.extend(merged, query, oauth);
    // Note the sorting here is required
    var merged_arr = Object.keys(merged)
      .sort()
      .map(function (k) {
        return [k + '=' + encodeURIComponent(merged[k])];
      });
    var signature_base_str =
      method + concat + encodeURIComponent(url) + concat + encodeURIComponent(merged_arr.join(concat));

    var composite_key = encodeURIComponent(consumer_secret) + concat;
    var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
    var signature = hash.toString(CryptoJS.enc.Base64);

    oauth['oauth_signature'] = signature;
    var auth_header =
      'OAuth ' +
      Object.keys(oauth)
        .map(function (k) {
          return [k + '="' + oauth[k] + '"'];
        })
        .join(',');

    // $.ajax({
    //   url: url + '?' + $.param(query),
    //   headers: {
    //     'Authorization': auth_header,
    //     'X-Yahoo-App-Id': app_id,
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //     "Access-Control-Allow-Credentials": 'true'

    //   },
    //   method: 'GET',
    //   success: function(data: any){
    //     console.log(data);
    //     console.log('SOMETHING HAPPENED');
    //   }
    // });

    let headers = new HttpHeaders();
    headers.set('Authorization', auth_header);
    headers.set('X-Yahoo-App-Id', app_id);
    var result = this.httpClient.get(routes.quote(this.location), { headers }).pipe(
      map((body: any) => body.value),
      catchError(() => of('Error, could not load joke :-('))
    );

    return result;
    // this.httpClient.get('https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca');
  }
}
