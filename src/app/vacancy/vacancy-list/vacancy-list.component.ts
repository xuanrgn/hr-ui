import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { Employee } from "src/app/employee";
import { VacancyDialogComponent } from "../vacancy-dialog/vacancy-dialog/vacancy-dialog.component";
import { Vacancy } from "../vacancy.model";
import { VacancyService } from "../vacancy.service";

@Component({
  selector: "app-vacancy-list",
  templateUrl: "./vacancy-list.component.html",
  styleUrls: ["./vacancy-list.component.css"],
})
export class VacancyListComponent implements OnInit {
  vacancies: Observable<Employee[]>;
  constructor(
    private vacancyService: VacancyService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.vacancies = this.vacancyService.getList();
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
