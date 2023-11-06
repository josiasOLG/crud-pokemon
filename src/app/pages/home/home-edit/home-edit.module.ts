import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEditComponent } from './home-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';
import { IgxGridModule, IgxIconModule } from 'igniteui-angular';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { OrganismsModule } from 'src/app/organisms/organisms.module';

const routes: Routes = [
  { path: '', component: HomeEditComponent },
];

@NgModule({
  declarations: [HomeEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IgxIconModule,
    OrganismsModule
  ],
  providers: [
    PokemonApiService
  ],
  exports: [HomeEditComponent]
})
export class HomeEditModule { }
