// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './pages/shell/shell';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  Shell.childRoutes(
    [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'home/:id',
        loadChildren: () => import('./pages/home/home-edit/home-edit.module').then(m => m.HomeEditModule)
      },
      {
        path: 'deck',
        loadChildren: () => import('./pages/deck-builder/deck-builder.module').then(m => m.DeckBuilderModule)
      }
    ],
  )
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
