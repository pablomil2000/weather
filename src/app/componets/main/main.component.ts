import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() CityName: string = '';
  @Input() currentTemperature: number = 0;
  @Input() isDay: number = 0;
}
