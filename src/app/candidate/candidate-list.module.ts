import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { throwIfAlreadyLoaded } from "../shared/module-import.guard";
import { CandidateListComponent } from "./candidate-list.component";
import { CandidateDialogComponent } from "./dialog/candidate-dialog.component";

const routes: Routes = [
  {
    path: "",
    component: CandidateListComponent,
  },
];

@NgModule({
  declarations: [CandidateListComponent, CandidateDialogComponent],
  imports: [
    RouterModule.forChild(routes),
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  entryComponents: [CandidateDialogComponent],
})
export class CandidateModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CandidateModule
  ) {
    throwIfAlreadyLoaded(parentModule, "CandidateModule");
  }
}
