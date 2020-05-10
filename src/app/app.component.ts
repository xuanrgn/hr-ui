import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAuth = true;
  title = 'HR Module'
  constructor(private meta: Meta) {
  	  this.meta.addTag({ name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' })
  }
}
