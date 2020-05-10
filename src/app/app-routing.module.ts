import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { CandidateComponent } from "./candidate/candidate.component";
import { EmployeeDetailsComponent } from "./employee/employee-form/employee-details.component";
import { UpdateEmployeeComponent } from "./employee/employee-update/update-employee.component";
import { ApprovedInterviewComponent } from "./interview/approved/approved-interview.component";
import { CompletedInterviewComponent } from "./interview/completed/completed-interview.component";
import { RegisteredInterviewComponent } from "./interview/registered/registered-interview.component";
import { throwIfAlreadyLoaded } from "./shared/module-import.guard";
import { LoginComponent } from './auth/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  { path: "", redirectTo: "vacancy", pathMatch: "full" },
  {
    path: "employee",
    loadChildren: "./employee/employee-list.module#EmployeeModule",
  },
  {
    path: "vacancy",
    loadChildren: "./vacancy/vacancy-list.module#VacancyModule",
  },
  { path: "candidate", component: CandidateComponent },

  { path: "interview/registered", component: RegisteredInterviewComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "interview/approved", component: ApprovedInterviewComponent },
  { path: "interview/completed", component: CompletedInterviewComponent },

  { path: "calendar", component: CalendarComponent },

  { path: "update/:id", component: UpdateEmployeeComponent },
  { path: "details/:id", component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppRoutingModule
  ) {
    throwIfAlreadyLoaded(parentModule, "AppRoutingModule");
  }
}
