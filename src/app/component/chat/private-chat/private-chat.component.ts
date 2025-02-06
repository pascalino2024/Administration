import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserPrivateChatComponent } from './user-private-chat/user-private-chat.component';
import { ContactChatTabComponent } from '../contact-chat-tab/contact-chat-tab.component';

@Component({
  selector: 'app-private-chat',
  standalone: true,
  imports: [CommonModule,UserPrivateChatComponent,ContactChatTabComponent],
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss']
})
export class PrivateChatComponent {

}

