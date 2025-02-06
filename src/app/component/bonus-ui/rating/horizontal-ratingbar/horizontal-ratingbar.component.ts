import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: 'app-horizontal-ratingbar',
  standalone: true,
  imports: [CommonModule, BarRatingModule],
  templateUrl: './horizontal-ratingbar.component.html',
  styleUrls: ['./horizontal-ratingbar.component.scss']
})
export class HorizontalRatingbarComponent {

  public verticalRate = 1;

}
