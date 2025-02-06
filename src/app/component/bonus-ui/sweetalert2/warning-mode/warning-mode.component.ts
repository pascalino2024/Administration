import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warning-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warning-mode.component.html',
  styleUrls: ['./warning-mode.component.scss']
})
export class WarningModeComponent {

  warning() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'warning',
      confirmButtonColor: 'var(--theme-deafult)',
    })
  }


}
