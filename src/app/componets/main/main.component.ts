import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() currentTemperature: number = 0;
  @Input() isDay: number = 0;
  @Input() position: number[] = [];
  @Input() today: string = '';

  fechaHoy: string = '';

  ngOnInit(): void {
    this.fechaHoy = formatDate(this.today, 'dd-MM-yyyy', 'en');  
  }
}
