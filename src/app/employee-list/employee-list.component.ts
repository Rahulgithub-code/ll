import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  EmpDatas: Employee[];
  newArray: any[] = [];
  index;
  constructor(private _empService: EmpDataService) {
    for (let i of _empService.EmpData) {
      this.newArray.push(false);
    }
    console.log(this.newArray);
  }

  ngOnInit(): void {
    this.EmpDatas = this._empService.EmpData;

  }
  toggleON(index) {
    this.index = index
    for (let i = 0; i < this.newArray.length; i++) {
      if (i == this.index) {
        if (this.newArray[i] == false) {
          this.newArray[i] = true;
        } else {
          this.newArray[i] = false;
        }
      } else {
        this.newArray[i] = false;
      }
    }
  }
}
