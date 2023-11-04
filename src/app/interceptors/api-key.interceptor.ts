// src/app/interceptors/api-key.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  private readonly API_KEY = environment.API_KEY;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers.set('X-Api-Key', this.API_KEY)
    });
    return next.handle(clonedRequest);
  }
}
