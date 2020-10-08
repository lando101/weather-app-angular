import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss'],
})
export class RainComponent implements OnInit {
  @Input() conditions = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.conditions) {
      this.makeItRain();
    }
  }

  makeItRain() {
    var makeItRain = function () {
      //clear out everything
      $('.rain').empty();

      var increment = 0;
      var drops = '';
      var backDrops = '';

      while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        //random number between 5 and 2
        var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops +=
          '<div class="drop" style=" position: absolute;bottom: 100%; width: 15px;height: 120px;pointer-events: none;animation: drop 0.5s linear infinite;left: ' +
          increment +
          '%; bottom: ' +
          (randoFiver + randoFiver - 1 + 100) +
          '%; animation-delay: 0.' +
          randoHundo +
          's; animation-duration: 0.5' +
          randoHundo +
          's;"><div class="stem" style="width: 1px; height: 60%; margin-left: 7px; background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));  animation: stem 0.5s linear infinite; animation-delay: 0.' +
          randoHundo +
          's; animation-duration: 0.5' +
          randoHundo +
          's;"></div><div class="splat" style="animation-delay: 0.' +
          randoHundo +
          's; animation-duration: 0.5' +
          randoHundo +
          's;"></div></div>';
        backDrops +=
          '<div class="drop" style="right: ' +
          increment +
          '%; bottom: ' +
          (randoFiver + randoFiver - 1 + 100) +
          '%; animation-delay: 0.' +
          randoHundo +
          's; animation-duration: 0.5' +
          randoHundo +
          's;"><div class="stem" style="animation-delay: 0.' +
          randoHundo +
          's; animation-duration: 0.5' +
          randoHundo +
          's;"></div><div class="splat" style="animation-delay: 0.' +
          randoHundo +
          's; animation-duration: 0.5' +
          randoHundo +
          's;"></div></div>';
      }

      $('.rain.front-row').append(drops);
      $('.rain.back-row').append(backDrops);
    };

    $('.splat-toggle.toggle').on('click', function () {
      $('body').toggleClass('splat-toggle');
      $('.splat-toggle.toggle').toggleClass('active');
      makeItRain();
    });

    $('.back-row-toggle.toggle').on('click', function () {
      $('body').toggleClass('back-row-toggle');
      $('.back-row-toggle.toggle').toggleClass('active');
      makeItRain();
    });

    $('.single-toggle.toggle').on('click', function () {
      $('body').toggleClass('single-toggle');
      $('.single-toggle.toggle').toggleClass('active');
      makeItRain();
    });
    makeItRain();
  }
}
