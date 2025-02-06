import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserGorupChatComponent } from './user-gorup-chat/user-gorup-chat.component';
import { ContactChatTabComponent } from '../contact-chat-tab/contact-chat-tab.component';


@Component({
  selector: 'app-group-chat',
  standalone: true,
  imports: [CommonModule,UserGorupChatComponent,ContactChatTabComponent],
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent {

}
