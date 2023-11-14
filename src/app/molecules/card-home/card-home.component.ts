import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="col-span-4 relative">
      <div class="pk-card grid grid-cols-5 card">
        <app-button [className]="'pk-button__more'" (onClick)="toggleDropdown.emit(deck.id)">
          <igx-icon fontSet="material">more_vert</igx-icon>
        </app-button>
        <app-dropdown
          *ngIf="dropdownStates[deck.id]"
          (editDeck)="editDeck.emit(deck)"
          (deleteDeck)="deleteDeck.emit(deck)"
        ></app-dropdown>
        <div class="col-span-12 flex justify-center">
          <img
            src="../../../assets/images/baralho.png"
            class="col-span-12 pk-image"
          />
        </div>
        <div class="col-span-12 flex flex-col pk-card__text">
          <app-title [className]="'pk-title__card'">{{ deck.name }}</app-title>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card-home.component.scss'],
})
export class CardHomeComponent {
  @Input() deck: any;
  @Output() toggleDropdown = new EventEmitter<number>();
  @Output() editDeck = new EventEmitter<any>();
  @Output() deleteDeck = new EventEmitter<any>();
  @Input() dropdownStates: { [key: string]: boolean } = {};
}
