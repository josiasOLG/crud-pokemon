import { Component } from "@angular/core";

@Component({
  selector: 'app-subtitle',
  template: `<p class="mt-1 pk-home__subtitle"><ng-content></ng-content></p>`,
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent {}
