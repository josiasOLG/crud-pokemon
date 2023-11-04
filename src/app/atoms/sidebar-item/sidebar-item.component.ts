// src/app/atoms/sidebar-item/sidebar-item.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() icon?: string;
  @Input() label?: string;
  @Input() isActive?: boolean;

  navigate() {

  }
}
