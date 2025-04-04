import { Component, OnInit } from '@angular/core';
import { IpApiService } from './services/ip-api.service';
import { OpenWeatherApiService } from './services/open-weather-api.service';
import { DatePipe } from '@angular/common';
import { MainComponent } from './componets/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [DatePipe, MainComponent],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  ipData: any;
  weatherData: any;
  new: any;
  constructor(private ipApiService: IpApiService, private openWeatherApiService: OpenWeatherApiService, private datePipe: DatePipe) {}
  ngOnInit(): void {
    this.ipApiService.getIpInfo().subscribe({
      next: (data) => {
        this.ipData = data;
        console.log(this.ipData);
        // Only fetch weather data after we have IP data
        if (data.lat && data.lon) {
          this.openWeatherApiService.getWeatherData(data.lat, data.lon).subscribe({
            next: (weatherData) => {
              this.weatherData = weatherData;
              console.table(this.weatherData);
              
            },
            error: (error) => console.error('Error fetching weather data:', error)
          });
        }
      },
      error: (error) => console.error('Error fetching IP data:', error)
    });
  }
}
