import { Component } from '@angular/core';
import { icon } from '../../../shared/data/icons/flags';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flag-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flag-icons.component.html',
  styleUrls: ['./flag-icons.component.scss']
})
export class FlagIconsComponent {

  public detail: boolean = false;
  public flag: string;
  public val: string;
  public icon = icon;

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.flag = icon;
    this.val = '<i class="flag-icon flag-icon-' + icon + '"></i>';
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="flag-icon flag-icon-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }

}
