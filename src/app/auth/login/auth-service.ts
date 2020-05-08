import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { Socialusers } from './socialuser';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

export const TOKEN_NAME = 'jwt_token';
declare var gapi: any;


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private _authorizedSubject = new Subject<any>();
  calendarItems: any[];
  url;

  constructor(
    private http: HttpClient,
    public OAuth: AuthService,
    public afAuth: AngularFireAuth
  ) {
    this.initClient();
  }

  initClient() {
    gapi.load('client', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: 'AIzaSyBG82-x0BfMF1-Q2050ARFHRgGpKoq1IZI',
        clientId: '1020871829242-5qk8pfvao1ta8tg8mo7gh6ahd5tpd94h.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar'
      })

      gapi.client.load('calendar', 'v3', () => {
        console.log('loaded calendar')

       this.getCalendar();
      })
    })
  }

  async login() {
    const googleAuth = gapi.auth2.getAuthInstance()
    const googleUser = await googleAuth.signIn();

    const token = googleUser.getAuthResponse().id_token;

    this.setToken(token);

    console.log(googleUser)

    const credential = auth.GoogleAuthProvider.credential(token);

    await this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
    this._authorizedSubject.next({login: true});

    // Alternative approach, use the Firebase login with scopes and make RESTful API calls

    // const provider = new auth.GoogleAuthProvider()
    // provider.addScope('https://www.googleapis.com/auth/calendar');

    // this.afAuth.auth.signInWithPopup(provider)

  }

  Savesresponse(socialusers: Socialusers) {
    localStorage.setItem('socialusers', JSON.stringify(socialusers));
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
    if (!token){
      this._authorizedSubject.next({login: false});
    }
  }

  signOut(): any {
    localStorage.removeItem(TOKEN_NAME);
  }

  get loginStatus(){
    return this._authorizedSubject;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) { token = this.getToken(); }
    if (!token) { return true; }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }

  getTokenExpirationDate(token: string): Date {
    if (!token) { return null; }
    const decoded = jwt_decode(token);
    console.log("JWT",decoded);
    const expirationDate = decoded.exp;
    if (expirationDate === undefined) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(expirationDate);
    return date;
  }

  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      this.Savesresponse(socialusers);
      this.setToken(socialusers.idToken);
      this._authorizedSubject.next({login: true});
    });
  }

  async getCalendar() {
    const events = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime'
    })

    console.log("Events",events)

    this.calendarItems = events.result.items;
  }

  async insertEvent() {
    const insert = await gapi.client.calendar.events.insert({
      calendarId: 'primary',
      start: {
        dateTime: hoursFromNow(2),
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: hoursFromNow(3),
        timeZone: 'America/Los_Angeles'
      },
      summary: 'Have Fun!!!',
      description: ''
    })

    await this.getCalendar();
  }

}
const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60 ).toISOString();
