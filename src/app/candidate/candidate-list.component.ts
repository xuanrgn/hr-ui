import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { CandidateService } from "../service/candidate.service";
import { ConfirmDialogComponent } from "../shared/confirm-dialog.component";
import { Candidate } from "./candidate.model";
import { CandidateDialogComponent } from "./dialog/candidate-dialog.component";

@Component({
  selector: "candidate-list",
  templateUrl: "./candidate-list.component.html",
  styleUrls: ["./candidate-list.component.css"],
})
export class CandidateListComponent implements OnInit {
  candidates: Observable<Candidate[]>;

  constructor(
    private service: CandidateService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.candidates = this.service.getList();
  }

  doEdit(id: number) {
    this.router.navigate(["info", id]);
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
        this.service.delete(candidate.id).subscribe(() => this.reloadData());
      }
    });
  }

  openDialog(candidate: Candidate) {
    const modalRef = this.modalService.open(CandidateDialogComponent, {
      size: "lg",
    });
    modalRef.componentInstance.model = candidate;
    modalRef.result.then((result) => {
      if (result) {
        this.reloadData();
      }
    });
  }
}
