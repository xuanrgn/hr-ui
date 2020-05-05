import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Employee } from "./../employee";
import { EmployeeService } from "./../employee.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog/employee-dialog.component';

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

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  employeeDetails(id: number) {
    this.router.navigate(["details", id]);
  }

  createEmployee() {
    this.openEmployeeDialog(new Employee());
    //this.router.navigate(["add-employee"]);
  }

  updateEmployee(employee: Employee) {
    this.openEmployeeDialog(employee)
    // this.router.navigate(["update", id]);
  }

  openEmployeeDialog(employee: Employee) {
    const modalRef = this.modalService.open(EmployeeDialogComponent, { size: 'lg'});
    modalRef.componentInstance.model = employee;
    modalRef.result.then(result => {
      if (result) {
        this.reloadData();
      }
    });
  }
}
