// src/app/service/card.service.ts

import { Injectable } from '@angular/core';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';


@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private apiPokemonService: PokemonApiService) {}

  getAllCardsPokemon(param: any): Promise<any> {
    return this.apiPokemonService.getAllCardsPokemon(param);
  }

  getAllCardsServerLocal(): Promise<any> {
    return this.apiPokemonService.getAllCardsServerLocal();
  }

  addCardToDeck(card: PokemonDto, existingCards: PokemonDto[]): PokemonDto[] {
    const count = existingCards.filter(
      (existingCard) => existingCard.name === card.name
    ).length;
    if (count < 4) {
      return [...existingCards, card];
    } else {
      throw new Error(
        'Você não pode adicionar mais do que 4 cartas com o mesmo nome ao baralho'
      );
    }
  }

  deleteCard(card: PokemonDto, existingCards: PokemonDto[]): PokemonDto[] {
    return existingCards.filter((res: PokemonDto) => res.id !== card.id);
  }

}
