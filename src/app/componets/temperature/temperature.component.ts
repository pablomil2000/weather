import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature',
  imports: [],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {
  @Input() MaxTemp = 0;
  @Input() MinTemp = 0;
}
