import { Component } from '@angular/core';
import { TopSectionComponent } from "../product-list/top-section/top-section.component";
import { ProductDataTableComponent } from "../product-list/product-data-table/product-data-table.component";

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [TopSectionComponent, ProductDataTableComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {

}
