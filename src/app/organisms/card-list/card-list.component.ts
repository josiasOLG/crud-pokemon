import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

// pk-card-list.component.ts
@Component({
  selector: 'app-card-list',
  template: `
    <ng-container *ngIf="decks.length; else noDataTemplate">
      <div class="grid grid-cols-4 gap-4">
        <app-card  *ngFor="let deck of decks"
            [deck]="deck"
            (toggleDropdown)="toggleDropdown($event)"
            (editDeck)="onEditDeck($event)"
            (deleteDeck)="onDeleteDeck($event)"
            [dropdownStates]="dropdownStates"
          ></app-card>  
      </div>
    </ng-container>
    <ng-template #noDataTemplate>
      <app-no-data></app-no-data>
    </ng-template>
  `,
})
export class CardListComponent {
  @Input() decks: any[] = [];
  @Input() dropdownStates: { [key: string]: boolean } = {};
  @Output() editDeck = new EventEmitter<any>();
  @Output() deleteDeck = new EventEmitter<any>();

  /**
   * Estados dos dropdowns.
   */


  /**
   * Manipulador de eventos de clique fora do elemento.
   */
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      Object.keys(this.dropdownStates).forEach((key) => {
        this.dropdownStates[key] = false;
      });
    }
  }

  constructor(private elementRef: ElementRef) { }

  handleDropdown(id: number) { }

  /**
   * Alternar o estado de um dropdown.
   *
   * @param index Índice do dropdown.
   */
  toggleDropdown(index: any): void {
    this.dropdownStates[index] = !this.dropdownStates[index];
  }

  /**
   * Chama-se quando o botão de editar de um card é clicado.
   *
   * @param deck O objeto deck associado ao card que está sendo editado.
   */
  onEditDeck(deck: any): void {
    this.editDeck.emit(deck);
  }

  /**
   * Chama-se quando o botão de editar de um card é clicado.
   *
   * @param deck O objeto deck associado ao card que está sendo editado.
   */
  onDeleteDeck(deck: any): void {
    this.deleteDeck.emit(deck);
  }

}
