import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html'
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
}