import { Component, OnInit, NgModuleRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { CandidateService } from "../service/candidate.service";
import { ConfirmDialogComponent } from "../shared/confirm-dialog.component";
import { Candidate } from "./candidate.model";
import { CandidateDialogComponent } from "./dialog/candidate-dialog.component";
import { Vacancy } from "../vacancy/vacancy.model";
import { VacancyService } from "../service/vacancy.service";
import { Employee } from "../employee/employee";
import { Location } from '@angular/common';

@Component({
  selector: "app-candidate-list",
  templateUrl: "./candidate-list.component.html",
  styleUrls: ["./candidate-list.component.css"],
})
export class CandidateListComponent implements OnInit {
  id: string;
  title: string;
  vacancy: any;
  employeesIds: string[];
  candidates: Observable<Candidate[]>;

  constructor(private _location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private candidateService: CandidateService,
    private vacancyService: VacancyService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log("VACANCY ID EDIT: ", this.id);

    this.vacancyService.get(this.id).subscribe((res) => {
      this.title = res.name;
      this.employeesIds = res.employeesIds;
    });

    console.log("employees: ", this.employeesIds);

    this.reloadData();
  }


  backClicked() {
    this._location.back();
  }

  reloadData() {
    this.candidates = this.candidateService.getList();
  }

  doEdit(id: number) {
    this.router.navigate(["/vacancy/candidate", id]);
  }

  doCreate() {
    this.openDialog(new Candidate());
  }

  doUpdate(candidate: Candidate) {
    console.log("edit: ", candidate);
    this.openDialog(candidate);
  }

  doDelete(candidate: Candidate) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.text =
      "Are you sure you want to delete " + candidate.fullName + "?";
    modalRef.result.then((result) => {
      if (result && result.action && result.action === "yes") {
        this.candidateService
          .delete(candidate.id)
          .subscribe(() => this.reloadData());
      }
    });
  }

  openDialog(candidate: Candidate) {
    const modalRef = this.modalService.open(CandidateDialogComponent, {
      size: "lg",
    });
    modalRef.componentInstance.model = candidate;
    modalRef.componentInstance.vacancy = this.vacancy;
    modalRef.result.then((result) => {
      if (result) {
        this.reloadData();
      }
    });
  }
}
