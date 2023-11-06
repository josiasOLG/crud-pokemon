import { Injectable } from '@angular/core';
import { DeckDto } from '../dto/deck.dto';
import { DeckApiService } from '../deck-api.service';
import { StateManagementService } from '../../state/state-management.service';

@Injectable({
  providedIn: 'root'
})
export class DeckManagerService {
  constructor(private deckService: DeckApiService, private stateManagementService: StateManagementService) {}

  async updateDeck(deckId: string, deck: DeckDto) {
    try {
      await this.deckService.updateDeck(deckId, deck);
      this.stateManagementService.emitStateChange(deckId);
    } catch (error) {
      console.error('Erro ao atualizar o baralho:', error);
    }
  }
}
