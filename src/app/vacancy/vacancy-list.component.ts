import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { VacancyService } from "../service/vacancy.service";
import { ConfirmDialogComponent } from "../shared/confirm-dialog.component";
import { VacancyDialogComponent } from "./vacancy-dialog/vacancy-dialog.component";
import { Vacancy } from "./vacancy.model";

@Component({
  selector: "vacancy-list",
  templateUrl: "./vacancy-list.component.html",
  styleUrls: ["./vacancy-list.component.css"],
})
export class VacancyListComponent implements OnInit {
  vacancies: Observable<Vacancy[]>;

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
  }

  doEdit(id: number) {
    this.router.navigate(["info", id]);
  }

  doCreate() {
    this.openDialog(new Vacancy());
  }

  doUpdate(vacancy: Vacancy) {
    console.log("edit: ", vacancy);
    this.openDialog(vacancy);
  }

  doDelete(vacancy: Vacancy) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.text =
      "Are you sure you want to delete " + vacancy.name + "?";
    modalRef.result.then((result) => {
      if (result && result.action && result.action === "yes") {
        this.vacancyService
          .delete(vacancy.id)
          .subscribe(() => this.reloadData());
      }
    });
  }

  openDialog(vacancy: Vacancy) {
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
