import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-update',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './latest-update.component.html',
  styleUrls: ['./latest-update.component.scss']
})
export class LatestUpdateComponent {

}
