import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from "src/app/employee.service";

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
  form: FormGroup;
  error = null;
  @Input() model: Employee;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder, 
    public activeModal: NgbActiveModal
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.form.patchValue(this.model);
    console.log("form", this.form);
    console.log("Model", this.model);
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
    });
  }
  doSave() {
    if (this.form.value.id) {
      this.employeeService.updateEmployee(this.form.value.id, this.form.value).subscribe(result => this.activeModal.close({ action: 'save' }));
    } else {
      this.employeeService.createEmployee(this.form.value).subscribe(result => this.activeModal.close({ action: 'save' }));
    }
  }
}
