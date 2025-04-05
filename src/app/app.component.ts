import { Component, OnInit } from '@angular/core';
import { OpenWeatherApiService } from './services/open-weather-api.service';
import { DatePipe } from '@angular/common';
import { GeolocationService } from './services/geolocation.service';
import { MainComponent } from "./componets/main/main.component";
import { TemperatureComponent } from './componets/temperature/temperature.component';
import { RainComponent } from "./components/rain/rain.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MainComponent, TemperatureComponent, RainComponent],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  location: any;
  weatherData: any;

  position: number[] = [];

  constructor(private geolocationService: GeolocationService, private OpenWeatherApiService: OpenWeatherApiService ) {}
  ngOnInit(): void {

    this.geolocationService.getLocation().subscribe((location) => {
      this.location = location;
      this.position = [this.location.coords.latitude, this.location.coords.longitude];

      this.OpenWeatherApiService.getWeatherData(this.position[0], this.position[1]).subscribe((weatherData) => {
        this.weatherData = weatherData;
        console.log(weatherData);
      });
    });
  }
}
