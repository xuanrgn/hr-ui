import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from "@angular/forms";
import { Candidate } from "../candidate/candidate.model";
import { Vacancy } from 'src/app/vacancy/vacancy.model';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})

export class CandidateDetailComponent implements OnInit {
  form: FormGroup;
  error = null;
  @Input() model: Candidate;
  @Input() vacancy: Vacancy;

  constructor(
  	private _location: Location,
  	private formBuilder: FormBuilder) { 
  	this.createForm();
  }

  ngOnInit() {
    this.form.patchValue(this.model);
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
