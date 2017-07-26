import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';

import { AuthService } from "app/core/services/auth.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private authService: AuthService, private router: Router) { }

  //TODO we need segments to preserve the whole path not just de routed module.
  //this will be implemented once this commits are merged on angular master here https://github.com/angular/angular/pull/13127
  
  // canLoad(route: Route): Observable<boolean> {    
  //   return this.checkIfLoggedIn(`/${route.path}`)
  // }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkIfLoggedIn(state.url)
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

  /**
   * @description Determins if user is loggedIn. 
   * If not, user will be redirected to login, considering the route to be redirect to if the login process succeeded
   * @param redirectTo - route to be redirected when login succeeded
   */
  checkIfLoggedIn(redirectTo) {
    return this.authService.afAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(auth => {
        if (auth) return true;

        this.router.navigate(['/account/login'], { queryParams: { redirectTo: redirectTo } });
        return false;
      });
  }
}

