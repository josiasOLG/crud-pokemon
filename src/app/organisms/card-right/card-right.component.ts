import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, switchMap } from 'rxjs';
import { DeckService } from 'src/app/service/deck-api.service';
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
  private stateSubscription!: Subscription;
  private _ID!: string;


  constructor(private deckService: DeckService, private stateManagementService: StateManagementService) {}

  ngOnInit(): void {
    this.stateSubscription = this.stateManagementService.onStateChanged().subscribe(
      (data) => {
        this._ID = data;
        this.startService();
      }
    );

  }
  startService() {
    this.deckService.getAllCardsDeckLocalId(this._ID).then(
      (res: DeckDto) => {
        this.cardPokemon = res.card;
      },
      (error) => {}
    )
  }

  ngOnDestroy(): void {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  getStars(hp: number): string {
    const maxHp = 200;
    const starCount = Math.round((hp / maxHp) * 5);
    return '★'.repeat(starCount) + '☆'.repeat(Math.max(0, 5 - starCount));
  }
}
