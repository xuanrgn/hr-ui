import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VacancyService } from '../../vacancy.service';
import { Vacancy } from '../../vacancy.model';
import { EmployeeService } from 'src/app/employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-vacancy-dialog',
  templateUrl: './vacancy-dialog.component.html',
  styleUrls: ['./vacancy-dialog.component.css']
})
export class VacancyDialogComponent implements OnInit {
  form: FormGroup;
  error = null;
  employees: Observable<Employee[]>;
  selectedEmployees: Employee[];
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
    console.log("form", this.form);
    console.log("Model", this.model);
  }
  addEmployee(employee: Employee){
    this.selectedEmployees.push(employee);
  }
  createForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
      employees: [null, Validators.required],
      candidates: [null, Validators.required],
    });
  }
  doSave() {
    if (this.form.value.id) {
      this.vacancyService
        .update(this.form.value.id, this.form.value)
        .subscribe((result) => this.activeModal.close({ action: "save" }));
    } else {
      this.vacancyService
        .create(this.form.value)
        .subscribe((result) => this.activeModal.close({ action: "save" }));
    }
  }
}
