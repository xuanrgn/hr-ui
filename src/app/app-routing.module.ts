import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { EmployeeDetailsComponent } from "./employee/employee-form/employee-details.component";
import { UpdateEmployeeComponent } from "./employee/employee-update/update-employee.component";
import { ApprovedInterviewComponent } from "./interview/approved/approved-interview.component";
import { CompletedInterviewComponent } from "./interview/completed/completed-interview.component";
import { RegisteredInterviewComponent } from "./interview/registered/registered-interview.component";
import { throwIfAlreadyLoaded } from "./shared/module-import.guard";

const routes: Routes = [
  { path: "", redirectTo: "vacancy", pathMatch: "full" },
  {
    path: "employee",
    loadChildren: "./employee/employee-list.module#EmployeeModule",
    canActivate: [AuthGuard],
  },
  {
    path: "vacancy",
    loadChildren: "./vacancy/vacancy-list.module#VacancyModule",
    canActivate: [AuthGuard],
  },

  {
    path: "vacancy/:id",
    loadChildren: "./candidate/candidate-list.module#CandidateModule",
    canActivate: [AuthGuard],
  },

  { path: "interview/registered", component: RegisteredInterviewComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "interview/approved", component: ApprovedInterviewComponent },
  { path: "interview/completed", component: CompletedInterviewComponent },

  {
    path: "calendar",
    component: CalendarComponent,
    canActivate: [AuthGuard],
  },

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
