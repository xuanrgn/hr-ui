import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/candidate/candidate.model';
import { CandidateService } from 'src/app/service/candidate.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'approved-interview',
  templateUrl: './approved-interview.component.html',
  styleUrls: ['./approved-interview.component.css']
})
export class ApprovedInterviewComponent implements OnInit {

  approvedInterview: Observable<Candidate[]>

  constructor(
    private candidateService: CandidateService
  ) {

  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.approvedInterview = this.candidateService.getList().pipe(
      map( candidates =>
        candidates.filter(
          (candidate: Candidate) => "APPROVED" === candidate.status
        )
      )
    );
  }
}
