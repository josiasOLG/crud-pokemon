import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon-api.service';
import { IgxIconModule } from 'igniteui-angular';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IgxIconModule
  ],
  providers: [
    PokemonService
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
