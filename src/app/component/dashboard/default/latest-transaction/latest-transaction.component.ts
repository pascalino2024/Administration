import { Component } from '@angular/core';
import { LatestTransaction } from '../../../../shared/data/dashboard/online-course/online-course';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-latest-transaction',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './latest-transaction.component.html',
  styleUrls: ['./latest-transaction.component.scss']
})
export class LatestTransactionComponent {

  public LatestTransctionData = LatestTransaction;

}
