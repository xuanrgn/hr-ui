import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
