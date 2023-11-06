import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="className" class="font-bold py-1 px-2" (click)="onClick.emit()">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter<void>();
  @Input() className!: string;
}
