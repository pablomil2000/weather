import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-rain',
  imports: [AgCharts],
  templateUrl: './rain.component.html',
  styleUrl: './rain.component.css'
})
export class RainComponent implements OnChanges {
  @Input() rain: number = 0;
  @Input() precipitation: number = 0;
  @Input() humidity: number = 0;
  @Input() windSpeed: number = 0;
  @Input() windDirection: number = 0;
  @Input() cloudCover: number = 0;
  @Input() rainHourly: number[] = [0,1,2,3,4,5];
  
  public chartOptions: AgChartOptions;
  private chart: any;

  constructor() {
    this.chartOptions = {
      data: [],
      series: [
        { type: 'line', xKey: 'hour', yKey: 'rain' },
      ],
      title: {
        text: 'Rain by hour'
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rainHourly']) {
      this.updateChartData();
    }
  }

  private updateChartData() {
    // Get current hour
    const now = new Date();
    const currentHour = now.getHours();
    
    // Calculate start and end hours
    const startHour = (currentHour - 5 + 24) % 24; // Last 5 hours
    const endHour = (currentHour + 24) % 24; // Next 24 hours
    
    const data = [];
    
    // Add last 5 hours
    for (let i = startHour; i < currentHour; i++) {
      const hourIndex = i % 24;
      data.push({ hour: `${hourIndex}:00`, rain: this.rainHourly[hourIndex] });
    }
    
    // Add next 24 hours
    for (let i = currentHour; i < endHour + 24; i++) {
      const hourIndex = i % 24;
      data.push({ hour: `${hourIndex}:00`, rain: this.rainHourly[hourIndex] });
    }
    
    this.chartOptions.data = data;
    
    // Update the chart if it exists
    if (this.chart) {
      this.chart.updateData(data);
    }
  }

  public onChartReady(event: any) {
    this.chart = event.chart;
  }
}