import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { WeatherGovService } from 'src/services/weather-gov.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss'],
})
export class LocationSearchComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number = 0;
  longitude: number = 0;
  zoom: number;
  address: string;
  foundCurrentLocation = false;
  private geoCoder: google.maps.Geocoder;

  init = true;

  @ViewChild('search')
  public searchElementRef: ElementRef;
  isLoading: boolean;

  @Output() loading = new EventEmitter<boolean>();

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private weatherService: WeatherGovService
  ) {}

  ngOnInit(): void {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();

      // sets restrictions on what comes back from google
      var options = {
        types: ['(regions)'],
      };
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, options);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          // this.weatherService.setSearchLocation(place.formatted_address);
          this.zoom = 12;

          // // if(!this.init){
          this.getAddress(this.latitude, this.longitude);
          this.init = false;
          // }
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          this.foundCurrentLocation = true;
          // console.log(this.latitude);
          // console.log(this.longitude);
          this.zoom = 8;
          // this.loading.emit(true);

          this.getAddress(this.latitude, this.longitude);
          // console.log('There is location data');
        },
        function error(error) {
          // alert('No data')
        }
      );
    }
    setTimeout(() => {
      if (!this.foundCurrentLocation) {
        this.getAddress(48.41, -114.34);
        this.weatherService.setSearchLocation('Whitefish, MT 59937, USA');
      }
    }, 1000);
  }

  // markerDragEnd($event: any) {
  //   console.log($event);
  //   this.latitude = $event.coords.lat;
  //   this.longitude = $event.coords.lng;
  //   this.getAddress(this.latitude, this.longitude);
  // }

  getAddress(latitude: number, longitude: number) {
    this.weatherService.searchWeather(latitude, longitude).subscribe((data) => {
      this.weatherService.setWeatherData(data);
    });

    this.weatherService.searchWeather(latitude, longitude).subscribe((data) => {
      // console.log(data);
      // console.log('GOV SEARCH RESULTS');
    });

    let options = {
      types: ['(cities)'],
    };
    this.loading.emit(true);

    this.getWeatherData(latitude, longitude);

    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (
        results: { formatted_address: string; address_components: any[]; types: any; postcode_localities: any }[],
        status: string
      ) => {
        // console.log(results);
        // console.log(status);
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
            this.weatherService.setSearchLocation(results[0].address_components[2].short_name);
            // console.log(results[0]);
            // console.log('TYPES!!!!!!!!!!!!!!!!!!!');
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  }

  getWeatherData(latitude: number, longitude: number) {
    // this.weatherService.getAirQualityAPIv2(latitude, longitude).subscribe((data) => {
    //   if (data) {
    //     // console.log(data);
    //     this.weatherService.setAirQuality(data);
    //     // console.log('AIR QUALITY');
    //   }
    // });
    this.weatherService.getCurrentWeatherBackup(latitude, longitude).subscribe((data) => {
      // console.log(data);
      // console.log('OPEN WEATHER API WEATHER');
      if (data) {
        this.weatherService.setCurrentWeatherData(data);
        this.weatherService.setWeatherTheme(data?.current?.weather[0]?.icon);
        // setTimeout(() => {
        this.loading.emit(false);
        // }, 750);
      }
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // const input = document.getElementById('search-input');
    // const searchBtn = document.getElementById('search-btn');
    // const expand = () => {
    //   searchBtn.classList.toggle('close');
    //   input.classList.toggle('square');
    // };
    // searchBtn.addEventListener('click', expand);
  }
}
