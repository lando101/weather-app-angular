import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter',
})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        var tempareature = (value - 32) / 1.8;
        return tempareature.toFixed(0);
      }
      if (unit === 'F') {
        var tempareature = value * (9 / 5) + 32;
        return tempareature.toFixed(0);
      }
    }
    return;
  }
}
