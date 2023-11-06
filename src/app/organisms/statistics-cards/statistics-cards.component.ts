import { Component, Input } from '@angular/core';
import { DeckDto } from 'src/app/service/dto/deck.dto';

@Component({
  selector: 'app-statistics-cards',
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <app-statistic-card
        [icon]="'pets'"
        [title]="'Número de Pokémons'"
        [color]="'indigo-500'"
        [value]="cardPokemon.length"
      >
      </app-statistic-card>
      <app-statistic-card
        [icon]="'school'"
        [title]="'Número de Cartas de Treinador'"
        [color]="'green-500'"
        [value]="getTrainerCardCount()"
      >
      </app-statistic-card>
      <app-statistic-card
        [icon]="'palette'"
        [title]="'Número de Cores Únicas'"
        [color]="'red-500'"
        [value]="getUniqueColors().length"
      >
      </app-statistic-card>
    </div>
  `,
  styleUrls: ['./statistics-cards.component.scss'],
})
export class StatisticsCardsComponent {
  @Input() cardPokemon: DeckDto[] = [];
  @Input() deckAll!: DeckDto;

  getTrainerCardCount(): number {
    return this.cardPokemon.filter((card: any) => card.supertype === 'Trainer')
      .length;
  }

  getNumberOfUniqueColors(): number {
    return this.getUniqueColors().length;
  }

  getUniqueTypes(): string[] {
    const uniqueTypes: Set<string> = new Set();
    this.deckAll.card?.forEach((card: DeckDto) => {
      card.types?.forEach((type) => {
        uniqueTypes.add(type);
      });
    });
    return Array.from(uniqueTypes);
  }

  getUniqueColors(): string[] {
    const uniqueColors: string[] = [];
    this.deckAll.card?.forEach((card: DeckDto) => {
      if (card.card) {
        card.card.forEach((pokemon: any) => {
          if (pokemon.color && !uniqueColors.includes(pokemon.color)) {
            uniqueColors.push(pokemon.color);
          }
        });
      }
    });
    return uniqueColors;
  }

}
