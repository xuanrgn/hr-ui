import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee/employee';
import { VacancyService } from 'src/app/service/vacancy.service';
import { Vacancy } from 'src/app/vacancy/vacancy.model';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { CandidateService } from 'src/app/service/candidate.service';
import { Candidate } from 'src/app/candidate/candidate.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewAddDialogComponent } from '../interview-add-dialog/interview-add-dialog.component';
import { Interview } from '../interview.model';
import { InterviewService } from 'src/app/service/interview.service';

@Component({
  selector: 'registered-interview',
  templateUrl: './registered-interview.component.html',
  styleUrls: ['./registered-interview.component.css']
})
export class RegisteredInterviewComponent implements OnInit {

  registeredInterview: Observable<Interview[]>;
  showSpinner: boolean = true;

  constructor(
    private interviewService: InterviewService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    this.reloadData();
    this.registeredInterview.subscribe(() => this.showSpinner = false)
  }

  reloadData() {
    this.registeredInterview = this.interviewService.getList().pipe(
      map( interviews =>
        interviews.filter(
          (interview: Interview) => "REGISTERED" === interview.status
        )
      )
    );
  }

  newInterView() {
    this.openDialog(new Interview());
  }

  editDate(interview: Interview){
    this.openDialog(interview);
  }

  openDialog(interview: Interview) {
    const modalRef = this.modalService.open(InterviewAddDialogComponent, {
      size: "lg",
    });
    modalRef.componentInstance.model = interview;
    modalRef.result.then((result) => {
      if (result) {
        this.reloadData();
      }
    });
  }
}
