import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { YahooWeatherService } from '../../services/yahoo-weather.service';
import { WeatherGovService } from '../../services/weather-gov.service';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService, private weatherService: WeatherGovService) {}

  ngOnInit() {
    this.isLoading = true;
    // this.weatherService.initWeatherService().subscribe(data => {
    //   console.log(data);
    // });
    // this.quoteService
    //   .getRandomQuote({ category: 'dev' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });
  }
}
