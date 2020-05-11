import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from '../employee';  

@Component({
  selector: "app-employee-dialog",
  templateUrl: "./employee-dialog.component.html",
  styleUrls: ["./employee-dialog.component.css"],
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
      fullName: [null, Validators.required],
      phoneNumber: [null,],
      email: [null, Validators.required],
      position: [null, Validators.required],
    });
  }

  doSave() {
    if (this.form.value.id) {
      this.employeeService
        .updateEmployee(this.form.value.id, this.form.value)
        .subscribe((result) => this.activeModal.close({ action: "save" }));
    } else {
      this.employeeService
        .createEmployee(this.form.value)
        .subscribe((result) => this.activeModal.close({ action: "save" }));

    }
  }

  saveFromFile(rec : Employee) {
      this.employeeService.createEmployee(rec);
        console.log(rec);
  }

  //csv
  public records: any[] = [];  
  @ViewChild('csvReader', {static: false}) csvReader: any;  
  
  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length); 
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      }; 
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    } 
  }  
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: Employee = new Employee();  
        csvRecord.id = null;  
        csvRecord.fullName = curruntRecord[1].trim();   
        csvRecord.phoneNumber = curruntRecord[2].trim();  
        csvRecord.email = curruntRecord[3].trim();  
        csvRecord.position = curruntRecord[4].trim();  
        csvArr.push(csvRecord);
        this.saveFromFile(csvRecord);
      }  
    }
    this.activeModal.close({ action: "save" }); 
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  } 
}
