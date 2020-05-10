import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee/employee';
import { VacancyService } from 'src/app/service/vacancy.service';
import { Vacancy } from 'src/app/vacancy/vacancy.model';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { CandidateService } from 'src/app/service/candidate.service';
import { Candidate } from 'src/app/candidate/candidate.model';

@Component({
  selector: 'registered-interview',
  templateUrl: './registered-interview.component.html',
  styleUrls: ['./registered-interview.component.css']
})
export class RegisteredInterviewComponent implements OnInit {

  registeredInterview: Observable<Candidate[]>;

  constructor(private candidateService: CandidateService) {

  }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
    this.registeredInterview = this.candidateService.getList().pipe(
      map( candidates =>
        candidates.filter(
          (candidate: Candidate) => "REGISTERED" === candidate.status
        )
      )
    );
  }
}
