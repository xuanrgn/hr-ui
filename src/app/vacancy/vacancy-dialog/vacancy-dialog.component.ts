import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { Employee } from "src/app/employee/employee";
import { EmployeeService } from "src/app/service/employee.service";
import { VacancyService } from "src/app/service/vacancy.service";
import { Vacancy } from "../vacancy.model";

@Component({
  selector: "app-vacancy-dialog",
  templateUrl: "./vacancy-dialog.component.html",
  styleUrls: ["./vacancy-dialog.component.css"],
})
export class VacancyDialogComponent implements OnInit {
  form: FormGroup;
  error = null;
  employees: Observable<Employee[]>;
  selectedEmployeeIds: string[] = [];
  vacancy: Vacancy;
  @Input() model: Vacancy;

  constructor(
    private vacancyService: VacancyService,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.employeeService.getEmployeesList().subscribe((val) => {
      this.employees = val;
    });
    this.form.patchValue(this.model);
  }

  addEmployee(employeeId: string) {
    this.selectedEmployeeIds.push(employeeId);
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
      employees: [null]
    });
  }

  doSave() {
    this.vacancy.name = this.form.value.name;
    this.vacancy.employeeIds = this.selectedEmployeeIds;

    console.log("DATA: ", this.vacancy);

    if (this.form.value.id) {
      this.vacancyService
        .update(this.form.value.id, this.vacancy)
        .subscribe(() => this.activeModal.close({ action: "save" }));
    } else {
      this.vacancyService
        .create(this.vacancy)
        .subscribe(() => this.activeModal.close({ action: "save" }));
    }
  }
}
