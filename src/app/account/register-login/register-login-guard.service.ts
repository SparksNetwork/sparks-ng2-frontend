import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from "@angular/router";

import { AuthService } from "app/core/services/auth.service";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class RegisterLoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.afAuth.authState.map(authState => {
      if (authState) {
        let redirectTo = route.queryParamMap.get("redirectTo") || '/dashboard';

        this.router.navigate([redirectTo]);
      }
      return !authState;
    }).take(1);
  }
}
