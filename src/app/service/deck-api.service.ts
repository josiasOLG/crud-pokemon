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
export class DeckApiService extends BaseApiService<DeckDto> {
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
   * @CompoDoc
   * @description
   * Método para obter o complemento de URL específico do serviço Pokémon.
   *
   * @returns O complemento de URL específico do serviço.
   */
  getUrlComplemento(): string {
    return 'decks';
  }

  /**
   * @CompoDoc
   * @description
   * Método para buscar todos os cartões de Pokémon.
   *
   * @returns Uma promessa que resolve para uma lista de cartões de Pokémon.
   */
  getAllCardsDeckLocalId(id: string): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.getById(id);
  }

  /**
   * @CompoDoc
   * @description
   * Método para adicionar um nome de deck.
   *
   * @param card O objeto DeckDto contendo os detalhes do deck.
   * @returns Uma promessa que resolve quando o nome do deck é adicionado com sucesso.
   */
  addNameDeck(card: DeckDto): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.post(card);
  }

  /**
   * @CompoDoc
   * @description
   * Método para atualizar um deck existente.
   *
   * @param id O ID do deck a ser atualizado.
   * @param item O objeto com as informações atualizadas do deck.
   * @returns Uma promessa que resolve quando o deck é atualizado com sucesso.
   */
  updateDeck(id: string, item: any): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.put(id, item);
  }

  /**
   * @CompoDoc
   * @description
   * Método para buscar todos os decks locais de um usuário.
   *
   * @param id O ID do usuário.
   * @returns Uma promessa que resolve para uma lista de decks do usuário.
   */
  getAllDecksLocal(id: any): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.getByUsuario(id);
  }


  filterHome(text: any): Promise<any> {
    this.setBaseUrl('http://localhost:3000/decks');
    return this.getByNameDeck(text);
  }
}
