import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isAdmin = true;

  @Output() toggleSidenav = new EventEmitter<void>();

  onToggleSinevad(): void{
    this.toggleSidenav.emit();
  }

}