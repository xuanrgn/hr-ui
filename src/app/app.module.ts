import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { CandidateComponent } from './candidate/candidate.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { InterviewComponent } from './interview/interview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule, HttpClientModule,ReactiveFormsModule, NgbModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
