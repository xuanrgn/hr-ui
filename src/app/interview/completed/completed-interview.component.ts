import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { Candidate } from 'src/app/candidate/candidate.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InterviewService } from 'src/app/service/interview.service';
import { Interview } from '../interview.model';

@Component({
  selector: 'completed-interview',
  templateUrl: './completed-interview.component.html',
  styleUrls: ['./completed-interview.component.css']
})
export class CompletedInterviewComponent implements OnInit {

  completedInterview: Observable<Interview[]>;
  showSpinner: boolean = true;

  constructor(
    private interviewService: InterviewService
  ) {

  }

  ngOnInit() {
    this.reloadData();
    this.completedInterview.subscribe(() => this.showSpinner = false)

  }

  reloadData() {
    this.completedInterview = this.interviewService.getList().pipe(
      map( interviews =>
        interviews.filter(
          (interview: Interview) => "COMPLETED" === interview.status
        )
      )
    );
  }
}
