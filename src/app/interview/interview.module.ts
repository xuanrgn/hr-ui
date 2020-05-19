import { InterviewAddDialogComponent } from './interview-add-dialog/interview-add-dialog.component';
import { RegisteredInterviewComponent } from './registered/registered-interview.component';
import { ApprovedInterviewComponent } from './approved/approved-interview.component';
import { CompletedInterviewComponent } from './completed/completed-interview.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateModule } from '../candidate/candidate-list.module';
import { throwIfAlreadyLoaded } from '../shared/module-import.guard';
import {LoadingSpinnerModule} from '../loading-spinner/loading-spinner.module'
const routes: Routes = [
  {
    path: "registered",
    component: RegisteredInterviewComponent,
  },
  {
    path: "approved",
    component: ApprovedInterviewComponent,
  },
  {
    path: "completed",
    component: CompletedInterviewComponent,
  },
];

@NgModule({
  declarations: [
    RegisteredInterviewComponent,
    ApprovedInterviewComponent,
    CompletedInterviewComponent,
    InterviewAddDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerModule,
  ],

  entryComponents: [InterviewAddDialogComponent],
})
export class InterviewModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CandidateModule
  ) {
    throwIfAlreadyLoaded(parentModule, "InterviewModule");
  }
}
