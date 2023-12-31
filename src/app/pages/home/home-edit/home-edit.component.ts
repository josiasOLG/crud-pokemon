import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeckApiService } from 'src/app/service/deck-api.service';
import { AlertService } from 'src/app/service/utils/alert.service';
import { StateManagementService } from 'src/app/state/state-management.service';
import * as fromLogin from '../../../state/redux/selectors/login.selectors';
import { DeckDto } from 'src/app/service/dto/deck.dto';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';

/**
 * Componente da página inicial.
 */
@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
})
export class HomeEditComponent implements OnInit, OnDestroy {
  private deckId!: any; // Variável para armazenar o ID do deck
  public deckAll!: DeckDto;
  public cardPokemon: DeckDto[] = [];

  /**
   * Construtor do componente Home.
   *
   * @param deckApiService Serviço de API para decks.
   * @param stateManagementService Serviço de gerenciamento de estado.
   * @param elementRef Referência ao elemento do DOM.
   */
  constructor(
    private deckApiService: DeckApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private stateManagementService: StateManagementService
  ) {
    this.deckId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /**
   * Método de inicialização do componente.
   */
  ngOnInit(): void {
    this.getAllCardPokemon();
  }

  ngOnDestroy(): void {
    this.stateManagementService.emitStateCardAll([]);
  }

  /**
   * Obter todas as cartas de Pokémon do usuário logado.
   */
  getAllCardPokemon(): void {
    this.deckApiService.getAllCardsDeckLocalId(this.deckId).then((res: any) => {
      this.deckAll = res;
      this.cardPokemon = res.card;
      this.stateManagementService.emitStateCardAll(this.cardPokemon);
    });
  }

}
