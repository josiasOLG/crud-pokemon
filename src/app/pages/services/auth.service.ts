import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  set(item: string) {
    localStorage.setItem('authToken', item);
  }

  clear(){
    localStorage.removeItem('authToken')
  }

}
