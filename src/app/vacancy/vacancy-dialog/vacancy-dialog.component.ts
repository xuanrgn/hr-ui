import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { IDropdownSettings } from "ng-multiselect-dropdown";
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

  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  positions = [
    { id: 1, desc: "UX/UI Designer" },
    { id: 2, desc: "Back-End Developer" },
    { id: 3, desc: "Front-End Developer" },
    { id: 4, desc: "DevOps" },
    { id: 5, desc: "Product Manager" },
  ];

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

    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      idField: "id",
      textField: "fullName",
      selectAllText: "Select All",
      unSelectAllText: "Unselect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
      noDataAvailablePlaceholderText: "Employees not found",
    };
    this.form.patchValue(this.model);
  }

  addEmployee(employeeId: string) {
    this.selectedEmployeeIds.push(employeeId);
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
      position: [null, Validators.required],
      employeeIds: [],
    });
  }

  doSave() {
    this.form.value.employeeIds = this.selectedEmployeeIds;
    console.log("DATA: ", this.form.value);
    if (this.form.value.id) {
      this.vacancyService
        .update(this.form.value.id, this.form.value)
        .subscribe(() => this.activeModal.close({ action: "save" }));
    } else {
      this.vacancyService
        .create(this.form.value)
        .subscribe(() => this.activeModal.close({ action: "save" }));
    }
  }

  onItemSelect(item: any) {
    this.selectedEmployeeIds.push(item.id);
    console.log("selected: ", this.selectedEmployeeIds);
  }

  onSelectAll(items: any) {
    items.forEach((e) => {
      this.onItemSelect(e);
    });
  }

  onSelected(event: any) {
    const position = event.target.value;
    console.log("POSITION: ", position);
  }
}
