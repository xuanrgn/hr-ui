import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { throwIfAlreadyLoaded } from "../shared/module-import.guard";
import { EmployeeDialogComponent } from "./employee-dialog/employee-dialog.component";
import { EmployeeListComponent } from "./employee-list.component";

const routes: Routes = [
  {
    path: "",
    component: EmployeeListComponent,
  },
];

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDialogComponent],
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  entryComponents: [EmployeeDialogComponent],
})
export class EmployeeModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: EmployeeModule
  ) {
    throwIfAlreadyLoaded(parentModule, "EmployeeModule");
  }
}
