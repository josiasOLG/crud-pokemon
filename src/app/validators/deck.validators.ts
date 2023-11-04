import { Injectable } from '@angular/core';
import { PokemonDto } from '../service/dto/pokemon.dto';

@Injectable({
  providedIn: 'root'
})
export class DeckValidatorService {
  private readonly MAX_CARDS_PER_NAME = 4;

  canAddCard(cards: PokemonDto[], cardToAdd: PokemonDto): boolean {
    const cardCount = cards.filter(card => card.name === cardToAdd.name).length;
    return cardCount < this.MAX_CARDS_PER_NAME;
  }

  isValidDeckSize(cards: PokemonDto[]): boolean {
    return cards.length >= 24 && cards.length <= 60;
  }
}
