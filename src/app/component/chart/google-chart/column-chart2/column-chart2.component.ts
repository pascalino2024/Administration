import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/chart/google-chart';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-column-chart2',
  standalone: true,
  imports: [CommonModule,Ng2GoogleChartsModule],
  templateUrl: './column-chart2.component.html',
  styleUrls: ['./column-chart2.component.scss']
})
export class ColumnChart2Component {
  
  public columnChart2 = chartData.columnChart2;

}
