import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    isLogined: boolean;
    constructor(
        private router: Router,
        private auth: AuthService,
    ) {
      this.auth.isLogined.subscribe(
        (val) => {
          this.isLogined = val;
        }
      )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('OnlyLoggedInUsers');
       // if (!this.auth.isTokenExpired()) {
         console.log("Token",this.auth.getToken())
            if(this.auth.getToken() != null) {
              return true;
            }
        // } else {
        //     this.router.navigate(['login'], { queryParams: { returnUrl: state.url || '/' } });
        //     return false;
        // }
    }
}
