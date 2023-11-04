import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckService } from 'src/app/service/deck-api.service';
import { DeckDto } from 'src/app/service/dto/deck.dto';
import { PokemonDto } from 'src/app/service/dto/pokemon.dto';
import { PokemonService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {

  }

}
