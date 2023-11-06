import { Component } from "@angular/core";

@Component({
  selector: 'app-no-data',
  template: `
    <div class="col-span-12 items-center justify-center h-screen">
      <div class="col-span-12 items-center mt-5 justify-center">
        <app-subtitle class="text-gray-400">Você não possui baralhos</app-subtitle>
        <igx-icon fontSet="material" class="pk-home__icon">casino</igx-icon>
      </div>
    </div>
  `,
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent {}
