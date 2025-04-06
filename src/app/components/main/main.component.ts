import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';


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
  @Input() weaterCodeApi: number = 0;

  fechaHoy: string = '';
  weaterCode: string = '';

  constructor(private dataService: DataService) {}

  ngOnChanges(): void {
    console.log();
    
    this.fechaHoy = formatDate(this.today, 'dd-MM-yyyy', 'en');
    this.weaterCode = this.dataService.getDescription(this.weaterCodeApi);
  }
}
