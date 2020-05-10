import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAuth = false;
  title = 'HR Module'
  constructor(private meta: Meta, private authService: AuthService) {
      this.meta.addTag({ name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' })
      this.authService.isLogined.subscribe(
        (val) => {
          this.isAuth = val;
        }
      );
  }
}
