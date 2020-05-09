import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Observable } from 'rxjs';
import { Vacancy } from '../vacancy.model';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VacancyService } from '../vacancy.service';
import { VacancyDialogComponent } from '../vacancy-dialog/vacancy-dialog/vacancy-dialog.component';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Observable<Employee[]>;
  constructor(
    private vacancyService: EmployeeService,
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.vacancies = this.vacancyService.getEmployeesList();
    console.log("employees", this.vacancies);
  }

  createEmployee() {
    this.openEmployeeDialog(new Vacancy());
    //this.router.navigate(["add-employee"]);
  }
  openEmployeeDialog(vacancy: Vacancy) {
    const modalRef = this.modalService.open(VacancyDialogComponent, {
      size: "lg",
    });
    modalRef.componentInstance.model = vacancy;
    modalRef.result.then((result) => {
      if (result) {
        this.reloadData();
      }
    });
  }

}
