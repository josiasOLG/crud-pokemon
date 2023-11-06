import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  items: { icon: string, label: string, action?: () => void }[] = [
    { icon: 'list', label: 'Pokemons',  action: () => this.navigate('home') },
    { icon: 'create', label: 'Novo baralho', action: () => this.navigate('deck') },
  ];

  items2: { icon: string, label: string, action?: () => void }[] = [
    { icon: 'star', label: 'Pontuação' },
    { icon: 'info', label: 'Informações' },
    { icon: 'logout', label: 'Sair', action: () => this.logout() },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  navigate(url: string){
    this.router.navigate([url]);
  }

  logout(){
    this.authService.clear()
    this.navigate('login');
  }
}
