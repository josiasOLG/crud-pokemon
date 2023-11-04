import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <div class="flex h-screen">
      <app-sidebar></app-sidebar>
      <div class="flex-grow z-2">
        <app-header-top></app-header-top>
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="col-span-1 md:col-span-2">
            <router-outlet></router-outlet>
          </div>
          <div class="col-span-1">
            <app-card-right></app-card-right>
          </div>
        </div>
      </div>
    </div>
    <app-alert></app-alert>
  `,
  styles: []
})
export class MainLayoutComponent {}
