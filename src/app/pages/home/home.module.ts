import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon-api.service';
import { IgxIconModule } from 'igniteui-angular';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IgxIconModule
  ],
  providers: [
    PokemonService
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
