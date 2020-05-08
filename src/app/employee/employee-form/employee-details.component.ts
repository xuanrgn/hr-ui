import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/employee";
import { EmployeeService } from "src/app/employee.service";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  id: string;
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params["id"];

    this.employeeService.getEmployee(this.id).subscribe(
      (data) => {
        console.log(data);
        this.employee = data;
      },
      (error) => console.log(error)
    );
  }

  list() {
    this.router.navigate(["employee"]);
  }
}
