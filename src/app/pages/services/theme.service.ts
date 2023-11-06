import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeDark: boolean;

  constructor(private cookieService: CookieService) {
    this.themeDark = this.cookieService.get('theme') === 'dark';
  }

  toggleTheme(): void {
    this.themeDark = !this.themeDark;
    const body = document.getElementsByTagName('body')[0];

    if (this.themeDark) {
      body.classList.add('dark');
      this.cookieService.set('theme', 'dark');
    } else {
      body.classList.remove('dark');
      this.cookieService.set('theme', 'light');
    }
  }

  isDarkMode(): boolean {
    return this.themeDark;
  }

  initializeTheme(): void {
    const theme = this.cookieService.get('theme');
    const body = document.getElementsByTagName('body')[0];

    if (theme === 'dark') {
      body.classList.add('dark');
      this.themeDark = true;
    } else {
      body.classList.remove('dark');
      this.themeDark = false;
    }
  }
}
