import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './auth/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateEmployeeComponent } from "./employee/employee-create/create-employee.component";
import { EmployeeDetailsComponent } from "./employee/employee-form/employee-details.component";
import { UpdateEmployeeComponent } from "./employee/employee-update/update-employee.component";
import { ApprovedInterviewComponent } from "./interview/approved/approved-interview.component";
import { CompletedInterviewComponent } from "./interview/completed/completed-interview.component";
import { RegisteredInterviewComponent } from "./interview/registered/registered-interview.component";
import { NavigationComponent } from "./navigation/navigation.component";
// import { AuthGuard } from './auth/login/auth.guard';
import { ConfirmDialogComponent } from "./shared/confirm-dialog.component";
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { InterviewAddDialogComponent } from './interview/interview-add-dialog/interview-add-dialog.component';
// import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    CalendarComponent,
    LoginComponent,
    ConfirmDialogComponent,
    RegistrationComponent,
    // LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    LoadingSpinnerModule,
  ],
  exports: [],

  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
