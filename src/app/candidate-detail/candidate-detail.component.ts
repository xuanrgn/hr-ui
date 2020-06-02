import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from "@angular/forms";
import { Candidate } from "../candidate/candidate.model";
import { Vacancy } from 'src/app/vacancy/vacancy.model';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../service/candidate.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})

export class CandidateDetailComponent implements OnInit {
  form: FormGroup;
  error = null;
  id = null;
  editable: boolean;
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
    this.form.disable();
    this.editable = false;
    this.id = this.route.snapshot.params["id"];
    this.candidateService.getList()
    .pipe(
      map((res: Candidate[]) => {
        return res.filter((candidate: Candidate) => candidate.id === this.id)
      })
    ).subscribe( (res) => {
      console.log(res[0]);
      this.form.patchValue(res[0]);
    });
    // this.form.patchValue(this.model);
    // TODO
    // this.candidateService.get(this.id).subscribe((res) => {
    //   this.form.patchValue(res);
    // })

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

  doEdit() {
    if (!this.editable) {
      console.log("HELLO");
      this.form.enable();
      this.editable = true;
    }
    else {
      console.log("NOT HELLO")
      this.doSave();
      this.form.disable();
      this.editable = false;
      //update data function
    }
  }

  doSave(){
    this.candidateService
        .update(this.form.value.id, this.form.value)
        .subscribe((result) => console.log(result));
  }
}
