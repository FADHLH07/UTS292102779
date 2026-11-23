import { Component } from '@angular/core';
import { HeaderComponent } from './header';
import { SidebarComponent } from './sidebar';
import { ChatComponent } from './chat';
import { FooterComponent } from './footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ChatComponent, FooterComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  sidebarOpen = true;
  toggleSidebar(): void { this.sidebarOpen = !this.sidebarOpen; }
}