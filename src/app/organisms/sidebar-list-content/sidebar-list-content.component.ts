import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: 'sidebar-list-content.component.html',
  styleUrls: ['./sidebar-list-content.component.scss']
})
export class SidebarContentComponent {
  @Input() title?: string;
}
