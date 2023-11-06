import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganismsModule } from './organisms/organisms.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { IgxDialogModule, IgxToastModule } from 'igniteui-angular';
import { AlertComponent } from './atoms/alert/alert.component';
import { AuthLayoutComponent } from './auth-layout.component';
import { MainLayoutComponent } from './main-layout.component';
import { ShellComponent } from './pages/shell/shell.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './state/redux/reducers/index.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSyncReducer } from './state/redux/local-storage-sync.config';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    AlertComponent,
    MainLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrganismsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IgxToastModule,
    IgxDialogModule,
    StoreModule.forRoot(rootReducer, { metaReducers: [localStorageSyncReducer] }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
