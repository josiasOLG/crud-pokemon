// src/app/atoms/sidebar-item/sidebar-item.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  @Input() blur?: boolean;
}
