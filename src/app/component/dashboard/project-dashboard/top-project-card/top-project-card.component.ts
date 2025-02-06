import { Component } from '@angular/core';
import { topEcommerceData } from '../../../../shared/data/dashboard/ecommerce/dashboard-ecommerce';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-project-card.component.html',
  styleUrl: './top-project-card.component.scss'
})
export class TopProjectCardComponent {

  public TopecommercaData = topEcommerceData;

}
