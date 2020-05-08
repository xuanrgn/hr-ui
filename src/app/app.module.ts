import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { CandidateComponent } from './candidate/candidate.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { InterviewComponent } from './interview/interview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig, AuthService } from 'angular-6-social-login';
import { AuthGuard } from './auth/login/auth.guard';
import { AuthInterceptor } from './auth/login/auth.interceptor';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
export function socialConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('1020871829242-5qk8pfvao1ta8tg8mo7gh6ahd5tpd94h.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}
const yourFirebaseConfig = {
  apiKey: 'AIzaSyCfCBG3FI7PUP6MnNj7wf3NDB3rIa511ug',
  authDomain: 'analysis-b0ed1.firebaseapp.com',
  databaseURL: 'https://analysis-b0ed1.firebaseio.com',
  projectId: 'analysis-b0ed1',
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    VacancyListComponent,
    AddVacancyComponent,
    CandidateComponent,
    AddCandidateComponent,
    InterviewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(yourFirebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: socialConfigs
    },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
