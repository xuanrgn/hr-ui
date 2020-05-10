import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { Candidate } from 'src/app/candidate/candidate.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'completed-interview',
  templateUrl: './completed-interview.component.html',
  styleUrls: ['./completed-interview.component.css']
})
export class CompletedInterviewComponent implements OnInit {

  completedInterview: Observable<Candidate[]>;

  constructor(
    private candidateService: CandidateService
  ) {

  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.completedInterview = this.candidateService.getList().pipe(
      map( candidates =>
        candidates.filter(
          (candidate: Candidate) => "COMPLETED" === candidate.status
        )
      )
    );
  }
}
