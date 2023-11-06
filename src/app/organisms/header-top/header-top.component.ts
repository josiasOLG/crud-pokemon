import { Component, OnInit } from '@angular/core';
import { StateManagementService } from 'src/app/state/state-management.service';
import * as fromLogin from '../../state/redux/selectors/login.selectors';
import { LoginDto } from 'src/app/service/dto/login.dto';

@Component({
  selector: 'app-header-top',
  templateUrl: 'header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  loginDataArray$!: LoginDto;

  constructor(private stateManagementService: StateManagementService){}

  ngOnInit(): void {
    this.stateManagementService.subscribeToStates(
      [fromLogin.selectLoginData],
      [(res: any) => {
        this.loginDataArray$ = res.loginData;
      }]
    );
  }
}
