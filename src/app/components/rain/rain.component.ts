import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rain',
  imports: [],
  templateUrl: './rain.component.html',
  styleUrl: './rain.component.css'
})
export class RainComponent {

  @Input() rain: number = 0;
  @Input() precipitation: number = 0;
  @Input() humidity: number = 0;
  @Input() windSpeed: number = 0;
  @Input() windDirection: number = 0;
  @Input() cloudCover: number = 0;

}
