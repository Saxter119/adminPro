import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels = ['18-25', '26-26', '37-47', '48-58', '59 <= ']
  colors = ['#FFB534', '#854F6C', '#522B5b', '#7F27FF', '#C1F2B0']
  data = [2000, 3000, 8000, 12000, 9500]

}

