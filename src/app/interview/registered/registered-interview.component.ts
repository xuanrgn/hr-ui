import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee/employee';

@Component({
  selector: 'registered-interview',
  templateUrl: './registered-interview.component.html',
  styleUrls: ['./registered-interview.component.css']
})
export class RegisteredInterviewComponent implements OnInit {

  registeredInterview: Employee[] = [];

  constructor() { }

  ngOnInit() {
    var emp = new Employee();
    emp.fullName = "Miras"
    emp.position = "Project Manager"
    this.registeredInterview.push(emp)
  }

}
