import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ChatMessage { text: string; time: string; mine: boolean; }
interface Contact { name: string; initials: string; status: string; color: string; preview: string; }

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.html'
})
export class ChatComponent {
  searchText = '';
  draft = '';
  selected = 'Olivia Bennett';
  contacts: Contact[] = [
    { name: 'Olivia Bennett', initials: 'OB', status: 'Online - typing...', color: '', preview: 'Sounds good. Otherwise, ship it.' },
    { name: 'Arcy Cooper', initials: 'AC', status: 'Last seen 10 minutes ago', color: 'green', preview: 'Thanks for the update!' },
    { name: 'Sophia Turner', initials: 'ST', status: 'Online', color: 'orange', preview: 'See you tomorrow.' },
    { name: 'Noah Williams', initials: 'NW', status: 'Offline', color: 'purple', preview: 'I will check it.' }
  ];
  messages: ChatMessage[] = [
    { text: 'Just finished going through the design. Overall, the new motion primitives are great.', time: '10:40 AM', mine: true },
    { text: 'Glad you like them. Any concerns?', time: '10:40 AM', mine: false },
    { text: 'Two small things: the success state on form inputs feels tight, and the focus ring is barely visible on dark theme.', time: '10:41 AM', mine: true },
    { text: 'Yeah, that focus ring issue has been bugging me too. I’ll bump the contrast and ping you for another look.', time: '10:42 AM', mine: false },
    { text: 'Sounds good. Otherwise, ship it.', time: '10:43 AM', mine: true }
  ];
  get selectedInitials(): string {
    return this.selected.split(' ').map((part) => part.charAt(0)).join('');
  }
  get filteredContacts(): Contact[] {
    return this.contacts.filter(c => c.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  selectContact(name: string): void { this.selected = name; }
  sendMessage(): void {
    const value = this.draft.trim();
    if (!value) return;
    this.messages.push({ text: value, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), mine: true });
    this.draft = '';
  }
}