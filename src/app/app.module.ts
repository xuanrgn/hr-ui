import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './auth/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddCandidateComponent } from "./candidate/add-candidate/add-candidate.component";
import { CandidateComponent } from "./candidate/candidate.component";
import { CreateEmployeeComponent } from "./employee/employee-create/create-employee.component";
import { EmployeeDetailsComponent } from "./employee/employee-form/employee-details.component";
import { UpdateEmployeeComponent } from "./employee/employee-update/update-employee.component";
import { ApprovedInterviewComponent } from "./interview/approved/approved-interview.component";
import { CompletedInterviewComponent } from "./interview/completed/completed-interview.component";
import { RegisteredInterviewComponent } from "./interview/registered/registered-interview.component";
import { NavigationComponent } from "./navigation/navigation.component";
// import { AuthGuard } from './auth/login/auth.guard';
import { ConfirmDialogComponent } from "./shared/confirm-dialog.component";
import { AddVacancyComponent } from "./vacancy/add-vacancy/add-vacancy.component";

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
    ApprovedInterviewComponent,
    CompletedInterviewComponent,
    RegisteredInterviewComponent,
    CalendarComponent,
    LoginComponent,
    ConfirmDialogComponent,
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
  providers: [],
})
export class AppModule {}
