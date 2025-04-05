import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private weatherCodes: { code: number; description: string }[] = [
    { code: 0, description: 'Soleado' },
    { code: 1, description: 'Mayormente soleado' },
    { code: 2, description: 'Parcialmente nublado' },
    { code: 3, description: 'Nublado' },
    { code: 45, description: 'Niebla' },
    { code: 48, description: 'Niebla con escarcha' },
    { code: 51, description: 'Llovizna ligera' },
    { code: 53, description: 'Llovizna moderada' },
    { code: 55, description: 'Llovizna densa' },
    { code: 56, description: 'Llovizna helada ligera' },
    { code: 57, description: 'Llovizna helada densa' },
    { code: 61, description: 'Lluvia ligera' },
    { code: 63, description: 'Lluvia moderada' },
    { code: 65, description: 'Lluvia fuerte' },
    { code: 66, description: 'Lluvia helada ligera' },
    { code: 67, description: 'Lluvia helada fuerte' },
    { code: 71, description: 'Nevada ligera' },
    { code: 73, description: 'Nevada moderada' },
    { code: 75, description: 'Nevada fuerte' },
    { code: 77, description: 'Granos de nieve' },
    { code: 80, description: 'Chubascos ligeros' },
    { code: 81, description: 'Chubascos moderados' },
    { code: 82, description: 'Chubascos fuertes' },
    { code: 85, description: 'Chubascos de nieve ligeros' },
    { code: 86, description: 'Chubascos de nieve fuertes' },
    { code: 95, description: 'Tormenta' },
    { code: 96, description: 'Tormenta con granizo leve' },
    { code: 99, description: 'Tormenta con granizo fuerte' }
  ];

  constructor() {}

  getDescription(code: number): string {
    const item = this.weatherCodes.find(w => w.code === code);
    return item ? item.description : 'Desconocido';
  }
  
}
