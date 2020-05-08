import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { InterviewComponent } from './interview/interview.component';
import { CandidateComponent } from './candidate/candidate.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { throwIfAlreadyLoaded } from './shared/module-import.guard';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/login/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  {
    path: 'employee',
    loadChildren: './employee-list/employee.module#EmployeeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar/calendar.module#CalendarModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { path: 'add-employee', component: CreateEmployeeComponent },
  { path: 'vacancy', component: VacancyListComponent },
  { path: 'add-vacancy', component: AddVacancyComponent },
  { path: 'candidate', component: CandidateComponent },
  { path: 'add-candidate', component: AddCandidateComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppRoutingModule,
) {
    throwIfAlreadyLoaded(parentModule, 'AppRoutingModule');
}
}
