import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { throwIfAlreadyLoaded } from "../shared/module-import.guard";
import { CandidateDetailComponent } from "./candidate-detail.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: CandidateDetailComponent,
  },
];

@NgModule({
  declarations: [CandidateDetailComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CandidateDetailModule { 
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CandidateDetailModule
  ) {
    throwIfAlreadyLoaded(parentModule, "CandidateDetailModule");
  }
 }
