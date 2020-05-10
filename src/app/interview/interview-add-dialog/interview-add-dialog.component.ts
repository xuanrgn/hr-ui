import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidateService } from 'src/app/service/candidate.service';
import { Interview } from '../interview.model';
import { InterviewService } from 'src/app/service/interview.service';

@Component({
  selector: 'app-interview-add-dialog',
  templateUrl: './interview-add-dialog.component.html',
  styleUrls: ['./interview-add-dialog.component.css']
})
export class InterviewAddDialogComponent implements OnInit {
  form: FormGroup;
  error = null;
  @Input() model: Interview;

  constructor(
    private interviewService: InterviewService,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.form.patchValue(this.model);
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: null,
      candidate: [null, Validators.required],
      address: [null, Validators.required],
      interviewDate: [null, Validators.required]
    });
  }

  doSave() {
    console.log(this.form);
    if (this.form.value.id) {
      this.interviewService
        .update(this.form.value.id, this.form.value)
        .subscribe((result) => this.activeModal.close({ action: "save" }));
    } else {
      this.interviewService
        .create(this.form.value)
        .subscribe((result) => this.activeModal.close({ action: "save" }));
    }
  }
}
