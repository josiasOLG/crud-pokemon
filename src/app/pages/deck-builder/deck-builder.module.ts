import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';
import { IgxIconModule, IgxInputGroupModule, IgxSelectModule, IgxStepperModule } from 'igniteui-angular';
import { DeckBuilderComponent } from './deck-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeckApiService } from 'src/app/service/deck-api.service';
import { IgxToastModule } from 'igniteui-angular';

const routes: Routes = [
  { path: '', component: DeckBuilderComponent },
];

@NgModule({
  declarations: [DeckBuilderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IgxIconModule,
    IgxInputGroupModule,
    IgxSelectModule,
    ReactiveFormsModule,
    IgxStepperModule,
    IgxToastModule,
  ],
  providers: [
    PokemonApiService,
    DeckApiService
  ],
  exports: [DeckBuilderComponent],
})
export class DeckBuilderModule { }
