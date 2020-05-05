import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog/employee-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfAlreadyLoaded } from '../shared/module-import.guard';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  },
];

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDialogComponent],
  imports: [RouterModule.forChild(routes), NgbModule, CommonModule, FormsModule, ReactiveFormsModule],

  entryComponents: [EmployeeDialogComponent],
})
export class EmployeeModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: EmployeeModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'EmployeeModule');
  }
}
