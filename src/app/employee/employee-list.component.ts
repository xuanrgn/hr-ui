import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { EmployeeDialogComponent } from "./employee-dialog/employee-dialog.component";
import { ConfirmDialogComponent } from '../shared/confirm-dialog.component';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
    console.log("employees", this.employees);
  }

  deleteEmployee(employee: Employee) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.text = 'Are you sure you want to delete ' + employee.name + '?';
    modalRef.result.then(result => {
      if (result && result.action && result.action === 'yes') {
        this.employeeService.deleteEmployee(employee.id).subscribe(() => this.reloadData());
      }
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(["details", id]);
  }

  createEmployee() {
    this.openEmployeeDialog(new Employee());
    //this.router.navigate(["add-employee"]);
  }

  updateEmployee(employee: Employee) {
    this.openEmployeeDialog(employee);
    // this.router.navigate(["update", id]);
  }

  openEmployeeDialog(employee: Employee) {
    const modalRef = this.modalService.open(EmployeeDialogComponent, {
      size: "lg",
    });
    modalRef.componentInstance.model = employee;
    modalRef.result.then((result) => {
      if (result) {
        this.reloadData();
      }
    });
  }
}
