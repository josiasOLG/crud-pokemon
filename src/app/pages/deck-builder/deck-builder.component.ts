import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IgxStepperComponent, IgxToastComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';
import { LoginDto } from 'src/app/service/dto/login.dto';
import { AlertService } from 'src/app/service/utils/alert.service';
import { StateManagementService } from 'src/app/state/state-management.service';
import * as fromLogin from '../../state/redux/selectors/login.selectors';
import { Store } from '@ngrx/store';
import { DeckService } from '../services/deck.service';
import { CardService } from '../services/card.service';

/**
 * Componente responsável pela construção e gerenciamento de decks de cartas.
 */
@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss'],
})
export class DeckBuilderComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') stepper!: IgxStepperComponent;
  @ViewChild('toast') toast!: IgxToastComponent;

  cards: any[] = [];
  decks: any[] = [];
  cardsSelected: any[] = [];
  step2Completed: boolean[] = [false, false, false];
  form: FormGroup;
  _ID!: string;
  _CARDS: PokemonDto[] = [];
  loginDataArray$!: LoginDto;

  constructor(
    private fb: FormBuilder,
    private stateManagementService: StateManagementService,
    private store: Store,
    private alertService: AlertService,
    private deckBuilderService: DeckService,
    private cardService: CardService
  ) {
    this.form = this.fb.group({
      deckName: [''],
      selectedCard: [''],
    });
    this.stateManagementService.subscribeToStates(
      [fromLogin.selectLoginData],
      [(res: any) => {
        this.loginDataArray$ = res.loginData;
      }]
    );

  }

  /**
   * Inicializa o componente. Obtém as cartas do deck e gera um ID único.
   */
  ngOnInit(): void {
    this.getDeckCards();
    this._ID = Date.now().toString();
  }

  ngOnDestroy(): void {
    this.stateManagementService.emitStateChange([]);
  }

  /**
   * Avança para a próxima etapa do assistente.
   * @param currentStep O índice da etapa atual.
   */
  goToNextStep(currentStep: number) {
    this.step2Completed[currentStep] = true;
    setTimeout(() => {
      this.stepper.next();
    }, 500);
  }

  /**
   * Valida e avança para a próxima etapa após inserir o nome do deck.
   * Verifica se o número de cartas no deck está dentro dos limites (24 a 60).
   */
  goToNextStepDetails() {
    const count = this._CARDS.length;
    if (count >= 24 && count <= 60) {
      this.goToNextStep(2);
    } else {
      this.alertService.showAlert({
        message:
          'Você precisa ter no mínimo 24 cartas no seu baralho e no máximo 60',
      });
    }
  }

  /**
   * Salva o nome do deck e avança para a próxima etapa.
   * @param currentStep O índice da etapa atual.
   */
  salvarNome(currentStep: number) {
    const deckName = this.form.get('deckName')?.value;
    this.deckBuilderService.saveDeckName(deckName, this._ID).then(
      (res: any) => {
        this.goToNextStep(1);
      },
      (error: any) => {}
    );
  }

  /**
   * Adiciona uma carta ao deck.
   * Verifica se o número de cartas com o mesmo nome no deck não excede 4.
   * @param card A carta a ser adicionada ao deck.
   */
  addCardToDeck(card: PokemonDto): void {
    this.deckBuilderService.addCardToDeck(card, this._CARDS, this._ID, this.form.get('deckName')?.value).then(
      (res) => {

      },
      (error: any) => {
        this.alertService.showAlert({
          message:
            'Você não pode adicionar mais do que 4 cartas com o mesmo nome ao baralho',
        });
      }
    );
  }

  /**
   * Obtém as cartas do deck.
   */
  getDeckCards(): void {
    const param = { page: 1, pageSize: 100 };
    this.cardService.getAllCardsPokemon(param).then(
      (res: any) => {
        this.cards = res.data;
      },
      (error: any) => {}
    );
  }

  /**
   * Remove uma carta do deck.
   * @param card A carta a ser removida do deck.
   */
  deleteCard(card: PokemonDto) {
    this.deckBuilderService.deleteCard(card, this._CARDS, this._ID, this.form.get('deckName')?.value).then(
      () => {
        this.stateManagementService.emitStateChange(this._ID);
      },
      (error: any) => {}
    );
  }

  /**
   * Finaliza a criação do deck.
   * Verifica se o número de cartas no deck está dentro dos limites (24 a 60)
   * e envia o deck para o servidor.
   */
  finalizeDeck(): void {
    this.deckBuilderService.finalizeDeck(this._CARDS, this._ID, this.form.get('deckName')?.value, this.loginDataArray$);
  }
}
