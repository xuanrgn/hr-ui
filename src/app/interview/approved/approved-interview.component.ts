import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/candidate/candidate.model';
import { CandidateService } from 'src/app/service/candidate.service';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewAddDialogComponent } from '../interview-add-dialog/interview-add-dialog.component';
import { Interview } from '../interview.model';
import { InterviewService } from 'src/app/service/interview.service';

@Component({
  selector: 'approved-interview',
  templateUrl: './approved-interview.component.html',
  styleUrls: ['./approved-interview.component.css']
})
export class ApprovedInterviewComponent implements OnInit {

  approvedInterview: Observable<Interview[]>

  constructor(
    private interviewService: InterviewService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.approvedInterview = this.interviewService.getList().pipe(
      map( interviews =>
        interviews.filter(
          (interview: Interview) => "APPROVED" === interview.status
        )
      )
    );
  }
}
