import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class isAuthennnticatedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.authStatus === AuthStatus.authenticated) {
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  }
}
