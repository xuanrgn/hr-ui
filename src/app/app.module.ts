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
import { LoginComponent } from './auth/login/login.component';
// import { AuthGuard } from './auth/login/auth.guard';
import { ConfirmDialogComponent } from './shared/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    AddVacancyComponent,
    CandidateComponent,
    AddCandidateComponent,
    InterviewComponent,
    LoginComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent],
  providers: [
    // AuthService,
    // {
    //   provide: AuthServiceConfig,
    //   useFactory: socialConfigs
    // },
    // AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
  ],
})
export class AppModule {}
