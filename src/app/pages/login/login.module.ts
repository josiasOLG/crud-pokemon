import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';
import { IgxCheckboxModule, IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginApiService } from 'src/app/service/login-api.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IgxIconModule,
    ReactiveFormsModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
  ],
  providers: [
    PokemonApiService,
    AuthService,
    LoginApiService
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
