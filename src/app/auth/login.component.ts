import { Component, OnInit } from '@angular/core';
import { Socialusers } from './socialuser';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }
  ngOnInit() {
  }
  public socialSignIn(socialProvider: string) {
    // this.authService.socialSignIn(socialProvider);
  }
}
