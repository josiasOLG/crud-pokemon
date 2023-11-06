import { Routes, Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @param extraCanActivate Additional canActivate guards, default: BvAuthorizationGuard.
   * @param extraData Additional route data, default: { reuse: true }.
   * @return The new route using shell as the base.
   */
  static childRoutes(
    routes: Routes,
    extraCanActivate: any[] = [AuthGuard],
    extraData: any = { reuse: true }
  ): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: extraCanActivate,
      data: { ...extraData }
    };
  }
}
