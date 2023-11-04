import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IgxStepperComponent, IgxToastComponent } from 'igniteui-angular';
import { DeckService } from 'src/app/service/deck-api.service';
import { DeckDto } from 'src/app/service/dto/deck.dto';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';
import { PokemonService } from 'src/app/service/pokemon-api.service';
import { AlertService } from 'src/app/service/utils/alert.service';
import { StateManagementService } from 'src/app/state/state-management.service';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss'],
})
export class DeckBuilderComponent implements OnInit {
  @ViewChild('stepper') stepper!: IgxStepperComponent;
  @ViewChild('toast') toast!: IgxToastComponent;

  cards: any[] = [];
  decks: any[] = [];
  cardsSelected: any[] = [];
  step2Completed: boolean[] = [false, false, false];
  form: FormGroup;
  _ID!: string;
  _CARDS: PokemonDto[] = [];

  constructor(
    private cardService: PokemonService,
    private fb: FormBuilder,
    private deckService: DeckService,
    private alertService: AlertService,
    private stateManagementService: StateManagementService,
    private router: Router
  ) {
    this.form = this.fb.group({
      deckName: [''],
      selectedCard: [''],
    });
  }

  ngOnInit(): void {
    this.getDeckCards();
    this._ID = Date.now().toString();
    this.stateManagementService.emitStateChange(this._ID);
  }

  goToNextStep(currentStep: number) {
    this.step2Completed[currentStep] = true;
    setTimeout(() => {
      this.stepper.next();
    }, 500);
  }

  goToNextStepDetails() {
    const count = this._CARDS.length;
    if (count >= 24 && count <= 60) {
      this.goToNextStep(2);
    } else {
      this.alertService.showAlert({
        message:
          'Você precisa ter no minimo 24 cartas no seu baralho e no maximo 60',
      });
    }
  }

  salvarNome(currentStep: number) {
    const param = {
      id: this._ID,
      enabled: false,
      name: this.form.get('deckName')?.value,
    } as DeckDto;
    this.deckService.addNameDeck(param).then(
      (res: any) => {
        this.goToNextStep(1);
      },
      (error: any) => {}
    );
  }

  addCardToDeck(card: PokemonDto): void {
    const count = this._CARDS.filter(
      (existingCard) => existingCard.name === card.name
    ).length;
    if (count < 4) {
      this._CARDS.push(card);
      const param = {
        id: this._ID,
        enabled: false,
        name: this.form.get('deckName')?.value,
        card: this._CARDS,
      };
      this.deckService.updateDeck(this._ID, param).then(
        (res: any) => {
          this.stateManagementService.emitStateChange(this._ID);
        },
        (error: any) => {}
      );
    } else {
      this.alertService.showAlert({
        message:
          'Você não pode adicionar mais do que 4 cartas com o mesmo nome ao baralho',
      });
    }
  }

  getDeckCards(): void {
    const param = { page: 1, pageSize: 100 };
    this.cardService.getAllCardsPokemon(param).then(
      (res: any) => {
        this.cards = res.data;
      },
      (error: any) => {}
    );
  }

  getCards(): void {
    this.cardService.getAllCardsServerLocal().then(
      (res: any) => {
        this.cards = res.data;
      },
      (error: any) => {}
    );
  }

  deleteCard(card: PokemonDto) {
    this._CARDS = this._CARDS.filter((res: PokemonDto) => res.id !== card.id);
    const param = {
      id: this._ID,
      enabled: false,
      name: this.form.get('deckName')?.value,
      card: this._CARDS,
    } as DeckDto;

    this.deckService.updateDeck(this._ID, param).then(
      (res: any) => {
        this.stateManagementService.emitStateChange(this._ID);
      },
      (error: any) => {}
    );
  }

  finalizeDeck(): void {
    const alertOptions: any = {
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
        if(this._CARDS.length >= 24 && this._CARDS.length <= 60 ){
          const param: DeckDto = {
            id: this._ID,
            name: this.form.get('deckName')?.value,
            enabled: true,
            card: this._CARDS,
          };
          this.deckService.updateDeck(this._ID, param).then(
            () => {
              this.stateManagementService.emitStateChange(this._ID);
              this.alertService.closeDialog();
              this.router.navigate(['/home']);
              console.log('aAAAAA');
            },
            (error) => {
              console.error('Erro ao atualizar o deck:', error);
              this.alertService.closeDialog();
            }
          );
        }else{
          const alertOptions2: any = {
            message: 'Você precisa ter no minimo 24 cartas no baralho e no maximo 60',
            autoClose: true,
            enableButtons: false,
          };
          this.alertService.showAlert(alertOptions2);
        }
      });
    } else {
      console.error('O diálogo de alerta não está registrado!');
    }
  }
}
