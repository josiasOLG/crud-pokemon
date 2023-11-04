import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { MainLayoutComponent } from './main-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'deck',
        loadChildren: () => import('./pages/deck-builder/deck-builder.module').then(m => m.DeckBuilderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
