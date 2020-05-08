import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCandidateComponent } from "./candidate/add-candidate/add-candidate.component";
import { CandidateComponent } from "./candidate/candidate.component";
import { CreateEmployeeComponent } from "./employee/employee-create/create-employee.component";
import { EmployeeDetailsComponent } from "./employee/employee-form/employee-details.component";
import { UpdateEmployeeComponent } from "./employee/employee-update/update-employee.component";
import { InterviewComponent } from "./interview/interview.component";
import { throwIfAlreadyLoaded } from "./shared/module-import.guard";
import { AddVacancyComponent } from "./vacancy/add-vacancy/add-vacancy.component";
import { VacancyListComponent } from "./vacancy/vacancy-list/vacancy-list.component";

const routes: Routes = [
  { path: "", redirectTo: "employee", pathMatch: "full" },
  {
    path: "employee",
    loadChildren: "./employee/employee.module#EmployeeModule",
  },
  { path: "add-employee", component: CreateEmployeeComponent },
  { path: "vacancy", component: VacancyListComponent },
  { path: "add-vacancy", component: AddVacancyComponent },
  { path: "candidate", component: CandidateComponent },
  { path: "add-candidate", component: AddCandidateComponent },
  { path: "interview", component: InterviewComponent },
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
