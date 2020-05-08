import { Component, OnInit } from '@angular/core';
import { Socialusers } from './socialuser';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { Router } from '@angular/router';
import { AuthorizationService } from './auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage;
  response;
  socialusers = new Socialusers();
  constructor(
    public OAuth: AuthService,
    private authService: AuthorizationService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  public socialSignIn(socialProvider: string) {
    // this.authService.socialSignIn(socialProvider);
    this.authService.login();
  }
}
