import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartRaderComponent } from './chart-rader/chart-rader.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { LatestTransactionComponent } from './latest-transaction/latest-transaction.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RevenueGrowthComponent } from './revenue-growth/revenue-growth.component';
import { SaleCardComponent } from './sale-card/sale-card.component';
import { TeamActivityComponent } from './team-activity/team-activity.component';
import { TopProductComponent } from './top-product/top-product.component';
import { UserVisitsDayComponent } from './user-visits-day/user-visits-day.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, ChartRaderComponent, DeliveriesComponent, LatestTransactionComponent, NewUserComponent, RevenueGrowthComponent
    , SaleCardComponent, TeamActivityComponent, TopProductComponent, UserVisitsDayComponent],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {

}
