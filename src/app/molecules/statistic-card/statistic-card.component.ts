import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-card',
  template: `
    <div class="bg-white rounded-lg p-4 pk-home-edit__card shadow-md">
      <div class="flex items-center">
        <div class="p-3 text-white mr-4" [ngClass]="'bg-' + color">
          <igx-icon fontSet="material-icons" class="text-xl">{{
            icon
          }}
        </igx-icon>
        </div>
        <div>
          <p class="text-xs text-gray-500 uppercase">{{ title }}</p>
          <p class="text-2xl">{{ value }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./statistic-card.component.scss'],
})
export class StatisticCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: number;
  @Input() color!: string;

}
