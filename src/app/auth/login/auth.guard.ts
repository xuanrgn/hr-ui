// import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { AuthorizationService } from './auth-service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private auth: AuthorizationService,
//     ) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         console.log('OnlyLoggedInUsers');
//         if (!this.auth.isTokenExpired()) {
//             return true;
//         } else {
//             this.router.navigate(['login'], { queryParams: { returnUrl: state.url || '/' } });
//             return false;
//         }
//     }
// }
