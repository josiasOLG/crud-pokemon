import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, switchMap } from 'rxjs';
import { DeckApiService } from 'src/app/service/deck-api.service';
import { DeckDto } from 'src/app/service/dto/deck.dto';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';
import { StateManagementService } from 'src/app/state/state-management.service';

@Component({
  selector: 'app-card-right',
  templateUrl: './card-right.component.html',
  styleUrls: ['./card-right.component.scss'],
})
export class CardRightComponent implements OnInit, OnDestroy {
  public cardPokemon?: PokemonDto[] = [];
  private pollingSubscription?: Subscription;
  private subscriptions = new Subscription();
  private _ID!: string;
  public _CARDALL: any[] = [];

  constructor(
    private deckService: DeckApiService,
    private stateManagementService: StateManagementService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.stateManagementService.onStateChanged().subscribe((data: any[]) => {
        this.cardPokemon = data;
        console.log('this.cardPokemon::',this.cardPokemon);
      })
    );

    this.subscriptions.add(
      this.stateManagementService.onStateCardAllChanged().subscribe((data) => {
        this._CARDALL = Array.isArray(data) ? data : [];
      })
    );
  }

  ngOnDestroy(): void {
    // this.subscriptions.unsubscribe();
  }

  startService() {

  }

  getStars(hp: number): string {
    const maxHp = 200;
    const starCount = Math.round((hp / maxHp) * 5);
    return '★'.repeat(starCount) + '☆'.repeat(Math.max(0, 5 - starCount));
  }

  getUniqueTypes(): string[] {
    const uniqueTypes: Set<string> = new Set();
    this._CARDALL?.forEach((card: DeckDto) => {
      card.types?.forEach((type) => {
        uniqueTypes.add(type);
      });
    });
    return Array.from(uniqueTypes);
  }

  getChartData(): any[] {
    const uniqueTypes = this.getUniqueTypes();
    const chartData: any[] = [];

    uniqueTypes.forEach((type: any) => {
      const count = this._CARDALL.reduce((total, card) => {
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
    const chartData: any = this._CARDALL?.map((card) => ({
      name: card.name,
      averageSellPrice: card.cardmarket.prices.averageSellPrice,
    }));
    return chartData;
  }

  getAttackChartData(pokemonList: any[]): any[] {
    const attacks = pokemonList.flatMap((pokemon) =>
      pokemon.attacks.map((attack: any) => ({
        name: `${pokemon.name} - ${attack.name}`,
        maxDamage: parseInt(attack.damage.replace('+', '')) || 0,
      }))
    );
    const filteredAttacks = attacks.filter(
      (attack) => !isNaN(attack.maxDamage)
    );
    return filteredAttacks;
  }
}
