import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-dismissing-dark-alert',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './dismissing-dark-alert.component.html',
  styleUrls: ['./dismissing-dark-alert.component.scss']
})
export class DismissingDarkAlertComponent {

  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }

}
