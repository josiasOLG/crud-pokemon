import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonDto } from './dto/pokemon.dto';
import { BaseApiService } from './base-api.service';

/**
 * @description
 * Serviço para interagir com a API de Pokémon. Este serviço estende
 * BaseApiService e implementa a interface ApiServiceInterface.
 *
 * @see BaseApiService
 * @see ApiServiceInterface
 */
@Injectable({
  providedIn: 'root',
})
export class PokemonService extends BaseApiService<PokemonDto> {
  /**
   * @description
   * Construtor que inicializa o HttpClient.
   *
   * @param http A instância do HttpClient injetada.
   */
  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * @description
   * Método para obter o complemento de URL específico do serviço Pokémon.
   *
   * @returns O complemento de URL específico do serviço.
   */
  getUrlComplemento(): string {
    return 'cards';
  }

  /**
   * @description
   * Método para buscar todos os cartões de Pokémon.
   *
   * @returns Uma promessa que resolve para uma lista de cartões de Pokémon.
   */
  getAllCardsPokemon(param: any): Promise<any> {
    return this.get(param);
  }

  addCardToCard(card: PokemonDto): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.post(card);
  }

  getAllCardsServerLocal(): Promise<any> {
    return this.get();
  }

  deleteCard(id: any): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.delete(id);
  }
}
