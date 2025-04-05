import { Component, OnInit } from '@angular/core';
import { OpenWeatherApiService } from './services/open-weather-api.service';
import { DatePipe } from '@angular/common';
import { GeolocationService } from './services/geolocation.service';
import { MainComponent } from "./componets/main/main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MainComponent],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  location: any;
  weatherData: any;
  constructor(private geolocationService: GeolocationService, private OpenWeatherApiService: OpenWeatherApiService ) {}
  ngOnInit(): void {

    this.geolocationService.getLocation().subscribe((location) => {
      this.location = location;

      this.OpenWeatherApiService.getWeatherData(this.location.coords.latitude, this.location.coords.longitude).subscribe((weatherData) => {
        this.weatherData = weatherData;
        // console.table(this.weatherData);
      });
    });
  }
}
