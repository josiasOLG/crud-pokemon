import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DeckApiService } from 'src/app/service/deck-api.service';
import { DeckDto } from 'src/app/service/dto/deck.dto';
import { LoginDto } from 'src/app/service/dto/login.dto';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';
import { AlertService } from 'src/app/service/utils/alert.service';
import { StateManagementService } from 'src/app/state/state-management.service';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(
    private deckService: DeckApiService,
    private alertService: AlertService,
    private stateManagementService: StateManagementService,
    private router: Router
  ) {}

  /**
   * Adiciona o nome do deck.
   * @param param Os detalhes do deck a serem adicionados.
   * @returns Uma promessa que resolve quando o nome do deck é adicionado.
   */
  addNameDeck(param: DeckDto): Promise<any> {
    return this.deckService.addNameDeck(param);
  }

  /**
   * Atualiza os detalhes do deck.
   * @param id O ID do deck a ser atualizado.
   * @param param Os detalhes do deck a serem atualizados.
   * @returns Uma promessa que resolve após a atualização do deck.
   */
  updateDeck(id: string, param: DeckDto): Promise<any> {
    return this.deckService.updateDeck(id, param).then(() => {
      this.emitStateChangeAndCloseDialog(id);
    });
  }

  /**
   * Salva o nome do deck.
   * @param deckName O nome do deck a ser salvo.
   * @param _ID O ID do deck.
   * @returns Uma promessa que resolve após o nome do deck ser salvo.
   */
  saveDeckName(deckName: string, _ID: string): Promise<any> {
    const param = this.createDeckDto(_ID, deckName);
    return this.addNameDeck(param);
  }

  /**
   * Adiciona uma carta ao deck.
   * @param card A carta a ser adicionada ao deck.
   * @param _CARDS A lista de cartas no deck.
   * @param _ID O ID do deck.
   * @param deckName O nome do deck.
   * @returns Uma promessa que resolve após a adição da carta ao deck.
   */
  addCardToDeck(
    card: PokemonDto,
    _CARDS: PokemonDto[],
    _ID: string,
    deckName: string
  ): Promise<any> {
    const count = this.countCardsByName(card, _CARDS);

    if (count < 4) {
      _CARDS.push(card);
      const param = this.createDeckDto(_ID, deckName, _CARDS);
      this.stateManagementService.emitStateChange(_CARDS);
      return this.updateDeck(_ID, param);
    } else {
      return Promise.reject('Você não pode adicionar mais de 4 cartas com o mesmo nome ao baralho');
    }
  }

  /**
   * Remove uma carta do deck.
   * @param card A carta a ser removida do deck.
   * @param _CARDS A lista de cartas no deck.
   * @param _ID O ID do deck.
   * @param deckName O nome do deck.
   * @returns Uma promessa que resolve após a remoção da carta do deck.
   */
  deleteCard(
    card: PokemonDto,
    _CARDS: PokemonDto[],
    _ID: string,
    deckName: string
  ): Promise<any> {
    _CARDS = _CARDS.filter((res: PokemonDto) => res.id !== card.id);
    const param = this.createDeckDto(_ID, deckName, _CARDS);
    return this.updateDeck(_ID, param);
  }

  /**
   * Finaliza a criação do deck.
   * @param _CARDS A lista de cartas no deck.
   * @param _ID O ID do deck.
   * @param deckName O nome do deck.
   * @param loginDataArray$ Os dados de login do usuário.
   */
  finalizeDeck(
    _CARDS: PokemonDto[],
    _ID: string,
    deckName: string,
    loginDataArray$: LoginDto
  ): void {
    const alertOptions = {
      message: 'Você tem certeza que deseja finalizar?',
      autoClose: false,
      enableButtons: true,
    };
    const alertResult = this.alertService.showAlert(alertOptions);
    if (alertResult) {
      alertResult.leftButtonClicked.subscribe(() => {
        this.alertService.closeDialog();
      });
      alertResult.rightButtonClicked.subscribe(() => {
        if (this.isValidDeckSize(_CARDS)) {
          const param = this.createDeckDto(_ID, deckName, _CARDS, loginDataArray$.id);
          this.updateDeck(_ID, param).then(() => {
            this.router.navigate(['/home']);

          });
        } else {
          this.showDeckSizeError();
        }
      });
    } else {
      console.error('O diálogo de alerta não está registrado!');
    }
  }

  private emitStateChangeAndCloseDialog(id: string): void {
    this.stateManagementService.emitStateChange(id);
    this.alertService.closeDialog();
  }

  private createDeckDto(id: string, name: string, cardList?: PokemonDto[], usuario?: string): DeckDto {
    return {
      id,
      name,
      enabled: true,
      card: cardList || [],
      usuario: usuario || '',
    };
  }

  private countCardsByName(card: PokemonDto, cardList: PokemonDto[]): number {
    return cardList.filter((existingCard) => existingCard.name === card.name).length;
  }

  private isValidDeckSize(cards: PokemonDto[]): boolean {
    return cards.length >= 24 && cards.length <= 60;
  }

  private showDeckSizeError(): void {
    const alertOptions = {
      message: 'Você precisa ter no mínimo 24 cartas no baralho e no máximo 60',
      autoClose: true,
      enableButtons: false,
    };
    this.alertService.showAlert(alertOptions);
  }
}
