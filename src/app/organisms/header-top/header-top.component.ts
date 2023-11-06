import { Component, OnInit } from '@angular/core';
import { StateManagementService } from 'src/app/state/state-management.service';
import * as fromLogin from '../../state/redux/selectors/login.selectors';
import { LoginDto } from 'src/app/service/dto/login.dto';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DeckService } from 'src/app/pages/services/deck.service';
import { DeckApiService } from 'src/app/service/deck-api.service';
import { DeckDto } from 'src/app/service/dto/deck.dto';

@Component({
  selector: 'app-header-top',
  templateUrl: 'header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  public form!: FormGroup;
  public loginDataArray$!: LoginDto;

  constructor(
    private stateManagementService: StateManagementService,
    private fb: FormBuilder,
    private deckApiService: DeckApiService
    ){
      this.form = this.fb.group({
        name: new FormControl('')
      })
    }

  ngOnInit(): void {
    this.stateManagementService.subscribeToStates(
      [fromLogin.selectLoginData],
      [(res: any) => {
        this.loginDataArray$ = res.loginData;
      }]
    );
  }

  filterName(){
    let name = this.form.get('name')?.value;
    this.deckApiService.filterHome(name).then(
      (res: DeckDto[]) => {
        this.stateManagementService.emitDeckFilter(res);
      },
      (error: any) => {}
    )
  }
}
