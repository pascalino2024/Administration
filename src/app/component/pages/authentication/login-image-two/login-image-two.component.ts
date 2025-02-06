import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
  selector: 'app-login-image-two',
  standalone: true,
  imports: [CommonModule,RouterModule,CommonLoginFormComponent],
  templateUrl: './login-image-two.component.html',
  styleUrls: ['./login-image-two.component.scss']
})
export class LoginImageTwoComponent {

}
