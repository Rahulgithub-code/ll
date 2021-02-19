import { invalid } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  EmpData: Employee[] = [
    { id: 1, fname: 'Rahul', lname: 'Kumar', salary: 50000, department: 'CSE' },
    { id: 2, fname: 'Vipul', lname: 'Kumar', salary: 50000, department: 'CSE' },
    { id: 3, fname: 'Sonali', lname: 'Kumar', salary: 50000, department: 'CSE' },
    { id: 4, fname: 'Nitu', lname: 'Kumar', salary: 50000, department: 'CSE' }
  ]

  constructor() { }
  addEmp(data: Employee) {
    this.EmpData.push(data)
  }
  updateEmp(data: Employee, index: number, id) {
    if (id == undefined) {
      this.EmpData.splice(index, 1, data)
    }
    else {
      let cindex = 0;
      for (let i of this.EmpData) {

        if (i.id == id) {
          break
        }
        else {
          cindex++
        }
      }
      this.EmpData.splice(cindex, 1, data)
    }

  }

}
