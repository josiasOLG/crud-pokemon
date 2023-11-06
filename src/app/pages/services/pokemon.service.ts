// src/app/service/pokemon.service.ts

import { Injectable } from '@angular/core';
import { DeckApiService } from 'src/app/service/deck-api.service';
import { DeckDto } from 'src/app/service/dto/deck.dto';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private deckService: DeckApiService) {}

  getStars(hp: number): string {
    const maxHp = 200;
    const starCount = Math.round((hp / maxHp) * 5);
    return '★'.repeat(starCount) + '☆'.repeat(Math.max(0, 5 - starCount));
  }
}
