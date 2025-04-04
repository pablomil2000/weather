import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';
  
  constructor(private http: HttpClient){}

  getWeatherData(lat: number, lon: number): Observable<any> {
    let url = this.apiUrl+`?latitude=${lat}&longitude=${lon}`;
    let param = `&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m&current=temperature_2m,rain,weather_code,is_day&timezone=auto`

    return this.http.get(`${url}${param}`);
  }
}
