import { Component } from '@angular/core';
import { BecomeMember, simplePricingCard } from '../../../shared/data/ecommerce/pricing'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  public becomememberData = BecomeMember;
  public simplepricing = simplePricingCard;

}
