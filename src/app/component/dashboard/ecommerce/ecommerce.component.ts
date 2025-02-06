import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/default/default-chart';
import { CommonModule } from '@angular/common';
import { CommonEcommerceChartComponent } from './common-ecommerce-chart/common-ecommerce-chart.component';
import { CommonProductCostingComponent } from './common-product-costing/common-product-costing.component';
import { EcommerceDetailsComponent } from './ecommerce-details/ecommerce-details.component';
import { LatestOrdersComponent } from './latest-orders/latest-orders.component';
import { LiveProductComponent } from './live-product/live-product.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { TopRevenueProductComponent } from './top-revenue-product/top-revenue-product.component';
import { SaleHistoryComponent } from './sale-history/sale-history.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [CommonModule, CommonEcommerceChartComponent, CommonProductCostingComponent, EcommerceDetailsComponent
    , LatestOrdersComponent, LiveProductComponent, SalesChartComponent, SpecialOfferComponent, TopRevenueProductComponent, SaleHistoryComponent],
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent {

  public totalrevenuchart = chartData.revenueChart
  public totalorderchart = chartData.TotalOrderChart

}
