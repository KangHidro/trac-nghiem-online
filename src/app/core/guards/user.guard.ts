import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticateService } from '../services/auth/authenticate.service';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private authService: AuthenticateService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    try {
      if (this.authService.getAuthData()) {
        if (this.authService.checkRoleUser()) {
          return of(true);
        }
      }
      return of(false);
    } catch (error) {
      return of(false);
    }
  }

  async canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | Observable<boolean>> {
    return this.canActivate(route, state);
  }
}
