import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styles: [
  ]
})
export class PieComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {

    this.polarAreaChartData = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          label: 'XXXXXXXXX',
          backgroundColor: this.pieColors,
          borderColor: this.pieColors,
        },
      ],
    }
  }

  @Input()
  public pieColors: string[] = ['']

  @Input() graficName: string = 'No name'

  @Input() labels: string[] = ['']

  @Input() data = []

  public polarAreaChartData: ChartData<'polarArea'>

  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';


}
