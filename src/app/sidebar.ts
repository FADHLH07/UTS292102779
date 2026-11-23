import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html'
})
export class SidebarComponent {
  @Input() isOpen = true;
}