import { Component } from '@angular/core';
import { RevenueGrowth } from '../../../../shared/data/dashboard/online-course/online-course-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-revenue-growth',
  standalone: true,
  imports: [ NgApexchartsModule ,ClickOutsideDirective],
  templateUrl: './revenue-growth.component.html',
  styleUrls: ['./revenue-growth.component.scss']
})
export class RevenueGrowthComponent {

  public isopen:boolean = false;
  public revenugrowth = RevenueGrowth

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}
