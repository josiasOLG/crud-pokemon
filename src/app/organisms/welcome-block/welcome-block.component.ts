import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-block',
  template: ` <div
    class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-lg p-6 text-white mb-6"
  >
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-xl font-bold pk-title__page">Bem-vindo aos detalhes</h2>
        <p class="text-sm pk-subtitle__page">Home / Deck</p>
      </div>
    </div>
  </div>`,
  styleUrls: ['./welcome-block.component.scss'],
})
export class WelcomeBlockComponent {}
