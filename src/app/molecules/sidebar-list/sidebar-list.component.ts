// src/app/molecules/sidebar-list/sidebar-list.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: 'sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent {
  @Input() items: { icon: string, label: string }[] = [];
}
