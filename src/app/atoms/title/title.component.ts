import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-title',
  template: `<p [ngClass]="className" class="text-sm text-gray-500 pk-home__title"><ng-content></ng-content></p>`,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() className!: string;
}
