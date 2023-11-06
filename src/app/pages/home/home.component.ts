import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DeckDto } from 'src/app/service/dto/deck.dto';
import { LoginDto } from 'src/app/service/dto/login.dto';
import { StateManagementService } from 'src/app/state/state-management.service';
import * as fromLogin from '../../state/redux/selectors/login.selectors';
import { DeckApiService } from 'src/app/service/deck-api.service';
import { AlertService } from 'src/app/service/utils/alert.service';
import { Router } from '@angular/router';

/**
 * Componente da página inicial.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * Lista de cartas de Pokémon.
   */
  public cardPokemon: DeckDto[] = [];

  /**
   * Dados de login do usuário.
   */
  public loginDataArray$!: LoginDto;

  /**
   * Estados dos dropdowns.
   */
  public dropdownStates: { [key: string]: boolean } = {};

  /**
   * Manipulador de eventos de clique fora do elemento.
   */
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      Object.keys(this.dropdownStates).forEach((key) => {
        this.dropdownStates[key] = false;
      });
    }
  }

  /**
   * Construtor do componente Home.
   *
   * @param deckApiService Serviço de API para decks.
   * @param stateManagementService Serviço de gerenciamento de estado.
   * @param elementRef Referência ao elemento do DOM.
   */
  constructor(
    private deckApiService: DeckApiService,
    private stateManagementService: StateManagementService,
    private elementRef: ElementRef,
    private alertService: AlertService,
    private router: Router
  ) {
    this.stateManagementService.subscribeToStates(
      [fromLogin.selectLoginData],
      [
        (res: any) => {
          this.loginDataArray$ = res.loginData;
        },
      ]
    );

    this.stateManagementService.onDeckFilter().subscribe(
      (res: DeckDto[]) => {
        this.cardPokemon = res;
      },
      (error: any) => {}
    )
  }

  /**
   * Método de inicialização do componente.
   */
  ngOnInit(): void {
    this.getAllCardPokemon();
  }

  /**
   * Alternar o estado de um dropdown.
   *
   * @param index Índice do dropdown.
   */
  toggleDropdown(index: string): void {
    this.dropdownStates[index] = !this.dropdownStates[index];
  }

  /**
   * Obter todas as cartas de Pokémon do usuário logado.
   */
  getAllCardPokemon(): void {
    this.deckApiService
      .getAllDecksLocal(this.loginDataArray$.id)
      .then((res: DeckDto[]) => {
        this.cardPokemon = res;
      });
  }

  /**
   * Remove uma carta do deck.
   *
   * @param deck A carta a ser removida do deck.
   */
  deleteDeck(deck: DeckDto) {
    /**
     * Remove a carta do deck utilizando o serviço de API.
     *
     * @param card.id O ID da carta a ser removida.
     * @returns Uma promessa que resolve após a remoção bem-sucedida.
     */

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
        this.deckApiService.delete(deck.id).then(
          () => {
            this.getAllCardPokemon();
          },
          (error: any) => {}
        );
      });
    } else {
      console.error('O diálogo de alerta não está registrado!');
    }
  }


  editDeck(deck: DeckDto){
    this.router.navigate(['home', deck.id])
  }
}
