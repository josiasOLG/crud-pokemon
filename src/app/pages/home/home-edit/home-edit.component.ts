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

  getUniqueTypes(): string[] {
    const uniqueTypes: Set<string> = new Set();
    this.deckAll.card?.forEach((card: DeckDto) => {
      card.types?.forEach((type) => {
        uniqueTypes.add(type);
      });
    });
    return Array.from(uniqueTypes);
  }

  getUniqueColors(): string[] {
    const uniqueColors: string[] = [];
    this.deckAll.card?.forEach((card: DeckDto) => {
      if (card.card) {
        card.card.forEach((pokemon: any) => {
          if (pokemon.color && !uniqueColors.includes(pokemon.color)) {
            uniqueColors.push(pokemon.color);
          }
        });
      }
    });
    return uniqueColors;
  }


  getTrainerCardCount(): number {
    return this.cardPokemon.filter((card: any) => card.supertype === 'Trainer')
      .length;
  }

  getNumberOfUniqueColors(): number {
    return this.getUniqueColors().length;
  }

  getNumberOfUniqueTypes(): number {
    return this.getUniqueTypes().length;
  }


  getChartData(): any[] {
    const uniqueTypes = this.getUniqueTypes();
    const chartData: any[] = [];

    uniqueTypes.forEach((type) => {
      const count = this.cardPokemon.reduce((total, card) => {
        return total + (card.types?.includes(type) ? 1 : 0);
      }, 0);

      chartData.push({
        supertype: type,
        count: count,
      });
    });

    return chartData;
  }

  getCardMarketData(): any[] {
    const chartData: any = this.deckAll.card?.map(card => ({
      name: card.name,
      averageSellPrice: card.cardmarket.prices.averageSellPrice
    }));
    return chartData;
  }

  getAttackChartData(pokemonList: any[]): any[] {
    // Mapeia os ataques dos Pokémon para um novo array
    const attacks = pokemonList.flatMap(pokemon =>
      pokemon.attacks.map((attack: any) => ({
        name: `${pokemon.name} - ${attack.name}`,
        maxDamage: parseInt(attack.damage.replace('+', '')) || 0 // Remove o símbolo '+' e converte para número
      }))
    );

    // Filtra ataques que tenham um valor de dano numérico
    const filteredAttacks = attacks.filter(attack => !isNaN(attack.maxDamage));

    return filteredAttacks;
  }

}
