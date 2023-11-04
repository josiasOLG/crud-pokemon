import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  items: { icon: string, label: string }[] = [
    { icon: 'list', label: 'Pokemons' },
    { icon: 'create', label: 'Novo baralho' },
  ];

  items2: { icon: string, label: string }[] = [
    { icon: 'star', label: 'Pontuação' },
    { icon: 'info', label: 'Informações' },
  ];
}
