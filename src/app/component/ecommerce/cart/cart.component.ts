import { Component } from '@angular/core';
import { cartItem } from '../../../shared/data/ecommerce/cart';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule,FeathericonComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public cartData = cartItem;

  decrement(id: number) {
    if (this.cartData[id - 1].counter > 1) {
      this.cartData[id - 1].counter -= 1;
    }
  }

  increment(id: number) {
    this.cartData[id - 1].counter += 1;
  }


}
