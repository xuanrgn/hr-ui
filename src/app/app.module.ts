import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddCandidateComponent } from "./candidate/add-candidate/add-candidate.component";
import { CandidateComponent } from "./candidate/candidate.component";
import { CreateEmployeeComponent } from "./employee/employee-create/create-employee.component";
import { EmployeeDetailsComponent } from "./employee/employee-form/employee-details.component";
import { UpdateEmployeeComponent } from "./employee/employee-update/update-employee.component";
import { InterviewComponent } from "./interview/interview.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { AddVacancyComponent } from "./vacancy/add-vacancy/add-vacancy.component";
import { VacancyListComponent } from "./vacancy/vacancy-list/vacancy-list.component";
import { GoogleLoginProvider, AuthServiceConfig, AuthService } from 'angular-6-social-login';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './auth/login/auth.guard';
import { AuthInterceptor } from './auth/login/auth.interceptor';

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
})
export class AppModule {}
