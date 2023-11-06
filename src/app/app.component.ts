import { Component, HostBinding, ViewChild } from '@angular/core';
import { IgxToastComponent } from 'igniteui-angular';
import { ThemeService } from './pages/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}

  title = 'crud-pokemon';
}
