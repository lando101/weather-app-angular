import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { WeatherResults } from 'src/models/weather-results.model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { GlobalConfig, ToastrConfig, ToastrService } from 'ngx-toastr';
import { WeatherGovService } from 'src/services/weather-gov.service';
import { WeatherAlerts } from '../../../models/weather-alerts.model';
// import { WeatherAlertSheetComponent } from '../weather-alert-sheet/weather-alert-sheet.component';

@Component({
  selector: 'app-weather-alert',
  templateUrl: './weather-alert.component.html',
  styleUrls: ['./weather-alert.component.scss'],
})
export class WeatherAlertComponent implements OnInit {
  @Input() weatherData: WeatherResults;
  weatherAlerts: WeatherAlerts;
  events: string[] = [''];
  zone = '';
  state = '';
  toastConfig: any = {
    closeButton: true,
    progressBar: true,
    // timeOut: 2005000
    disableTimeOut: true,
    // progressAnimation: 'decreasing',
    // timeOut: 20000,
    // extendedTimeOut: 20000,
    preventDuplicates: true,
    toastClass: 'light-toaster',
    // titleClass: 'toast-header',
    // messageClass: 'toast-body'
  };
  constructor(private toastr: ToastrService, private weatherService: WeatherGovService) {}

  ngOnInit(): void {
    // this.showSuccess();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.weatherData?.properties?.county) {
      this.toastr.clear();

      let countyUrl = this.weatherData?.properties?.county;
      this.zone = countyUrl.substr(countyUrl.length - 6, 6);
      this.events = [''];

      this.state = this.weatherData?.properties?.relativeLocation?.properties?.state;
      this.weatherService.getWeatherAlerts(this.state).subscribe((data) => {
        console.log('ALERTS !!!!!!!!!!!!');
        this.weatherAlerts = data;
        console.log(this.weatherAlerts);
        this.weatherAlerts.features.forEach((alert) => {
          let event = alert.properties.event;
          if (alert.properties.geocode.UGC.find((zone) => zone === this.zone)) {
            // do the zones match :: only show alerts for same zone
            if (!this.events.find((event) => event === alert.properties.event)) {
              // has this event already been displayed to the user :: don't show multiples
              this.events.push(event);
              this.showSuccess(alert.properties.event, alert.properties.headline); // push the alert
            }
          }
        });
      });
    }
  }
  showSuccess(title: string, message: string) {
    this.toastr.warning(message, title, this.toastConfig).onTap.subscribe((data) => {
      console.log('ACTION WAS TAKEN');
    });
  }
}
