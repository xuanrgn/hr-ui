import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ButtonModule, CheckBoxModule } from "@syncfusion/ej2-angular-buttons";
import { MultiSelectAllModule } from "@syncfusion/ej2-angular-dropdowns";
import { NumericTextBoxModule } from "@syncfusion/ej2-angular-inputs";
import { throwIfAlreadyLoaded } from "../shared/module-import.guard";
import { VacancyDialogComponent } from "./vacancy-dialog/vacancy-dialog.component";
import { VacancyListComponent } from "./vacancy-list.component";




const routes: Routes = [
  {
    path: "",
    component: VacancyListComponent,
  },
];

@NgModule({
  declarations: [VacancyListComponent, VacancyDialogComponent],
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectAllModule,
    NumericTextBoxModule,
    CheckBoxModule,
    ButtonModule,
  ],

  entryComponents: [VacancyDialogComponent],
})
export class VacancyModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: VacancyModule
  ) {
    throwIfAlreadyLoaded(parentModule, "VacancyModule");
  }
}
