import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeckDto } from './dto/deck.dto';
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
export class DeckService extends BaseApiService<DeckDto> {
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
    return 'decks';
  }

  /**
   * @description
   * Método para buscar todos os cartões de Pokémon.
   *
   * @returns Uma promessa que resolve para uma lista de cartões de Pokémon.
   */
  getAllCardsDeck(param?: any): Promise<any> {
    return this.get(param);
  }

  addDeckToDeck(card: DeckDto): Promise<any> {
    return this.post(card);
  }

  addNameDeck(card: DeckDto): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.post(card);
  }

  getAllCardsDeckLocalId(id: string): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.getById(id);
  }

  updateDeck(id: string, item: any): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.put(id, item);
  }

  getAllDecksLocal(): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.get();
  }
}
