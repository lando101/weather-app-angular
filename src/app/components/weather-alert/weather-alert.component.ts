import { Component, Input, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { WeatherResults } from 'src/models/weather-results.model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
// import { WeatherAlertSheetComponent } from '../weather-alert-sheet/weather-alert-sheet.component';

@Component({
  selector: 'app-weather-alert',
  templateUrl: './weather-alert.component.html',
  styleUrls: ['./weather-alert.component.scss'],
})
export class WeatherAlertComponent implements OnInit {
  @Input() weatherData: WeatherResults;

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     duration: 2000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top'
  //   }).afterDismissed().subscribe(data => {
  //     if(data){

  //     }
  //   });
  // }
  openBottomSheet(): void {
    this._bottomSheet.open(WeatherAlertSheetComponent);
  }
}
@Component({
  selector: 'app-weather-alert-sheet',
  templateUrl: '../weather-alert-sheet/weather-alert-sheet.component.html',
  styleUrls: ['../weather-alert-sheet/weather-alert-sheet.component.scss'],
})
export class WeatherAlertSheetComponent implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<WeatherAlertSheetComponent>) {}

  ngOnInit(): void {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
