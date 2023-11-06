import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/service/dto/login.dto';
import { LoginApiService } from 'src/app/service/login-api.service';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../state/redux/actions/login.action';
import { Utils } from 'src/app/service/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private loginService: LoginApiService,
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private utils: Utils
  ) {
    this.loginForm = this.formBuild.group({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      try {
        let id = this.utils.generateUniqueId();
        this.loginService.loginService({
          id: id,
          login: this.loginForm!.get('login')!.value,
          password: this.loginForm!.get('password')!.value,
        }).then(
          (res: LoginDto) => {
            if (res) {
              res.id = id;
            }
            this.store.dispatch(LoginActions.setLoginData({loginData: res}));
            this.authService.set('true');
            this.router.navigate(['home']);
          },
          (error) => {
          }
        );
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    }
  }

}
