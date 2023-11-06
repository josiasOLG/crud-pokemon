import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';
import { IgxIconModule } from 'igniteui-angular';
import { OrganismsModule } from 'src/app/organisms/organisms.module';
import { AtomsModule } from 'src/app/atoms/atoms.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IgxIconModule,
    OrganismsModule,
    AtomsModule
  ],
  providers: [
    PokemonApiService
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
