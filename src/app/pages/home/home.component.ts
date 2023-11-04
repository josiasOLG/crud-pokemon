import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckService } from 'src/app/service/deck-api.service';
import { DeckDto } from 'src/app/service/dto/deck.dto';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';
import { PokemonService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  public cardPokemon: DeckDto[] = [];

  constructor(private deckService: DeckService) {}

  ngOnInit(): void {
    this.getAllCardPokemon();
  }

  getAllCardPokemon(): Promise<any> {
    return this.deckService.getAllDecksLocal().then(
      (res: any) => {this.cardPokemon = res;}
    );
  }

  getStars(hp: number): string {
    const maxHp = 200;
    const starCount = Math.round((hp / maxHp) * 5);
    return '★'.repeat(starCount) + '☆'.repeat(Math.max(0, 5 - starCount));
  }
}
