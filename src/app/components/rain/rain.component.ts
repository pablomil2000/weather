import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-rain',
  standalone: true,
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.css']
})
export class RainComponent implements OnChanges, OnDestroy {
  @Input() rain: number = 0;
  @Input() precipitation: number = 0;
  @Input() humidity: number = 0;
  @Input() windSpeed: number = 0;
  @Input() windDirection: number = 0;
  @Input() cloudCover: number = 0;
  @Input() rainHourly: number[] = [0,1,2,3,4,5];
  @Input() termperatureHourly: number[] = [0,1,2,3,4,5]
  chart: Chart | undefined;
  labels: string[] = ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h'];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rainHourly']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = document.getElementById('rainChart') as HTMLCanvasElement;
    if (ctx) {
      this.chart = new Chart(ctx, {
        data: {
          datasets: [{
              type: 'bar',
              label: 'Precipitación (mm)',
              data: this.rainHourly
          }, {
              type: 'line',
              label: 'Temperatura (°C)',
              data: this.termperatureHourly,
          }],
          labels: this.labels
      },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Precipitación (mm)'
              }
            }
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}