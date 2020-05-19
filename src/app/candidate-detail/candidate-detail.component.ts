import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from "@angular/forms";
import { Candidate } from "../candidate/candidate.model";
import { Vacancy } from 'src/app/vacancy/vacancy.model';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../service/candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})

export class CandidateDetailComponent implements OnInit {
  form: FormGroup;
  error = null;
  id = null;
  @Input() model: Candidate;
  @Input() vacancy: Vacancy;

  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private candidateService: CandidateService,
  	private formBuilder: FormBuilder) { 
  	this.createForm();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    // this.form.patchValue(this.model);
    this.candidateService.get(this.id).subscribe((res) => {
      
    })
  }

  backClicked() {
    this._location.back();
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: null,
      fullName: [null, Validators.required],
      email: [null, Validators.required],
      phoneNumber: [null],
      resume: [null, Validators.required],
    });
  }

  doSave(){}
}
