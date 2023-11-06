import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckApiService } from 'src/app/service/deck-api.service';
import { DeckDto } from 'src/app/service/dto/deck.dto';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {

  }

}
