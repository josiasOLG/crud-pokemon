import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div
      class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 pk-card__dropdow"
    >
      <button
        class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
        (click)="editDeck.emit()"
      >
        <igx-icon fontSet="material" class="text-red-500 mr-2">edit</igx-icon>
      </button>
      <button
        class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
        (click)="deleteDeck.emit()"
      >
        <igx-icon fontSet="material" class="text-blue-500 mr-2"
          >delete</igx-icon
        >
      </button>
    </div>
  `,
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Output() editDeck = new EventEmitter<void>();
  @Output() deleteDeck = new EventEmitter<void>();
}
