import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-unique-dropdown',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './unique-dropdown.component.html',
  styleUrls: ['./unique-dropdown.component.scss']
})
export class UniqueDropdownComponent {

}
