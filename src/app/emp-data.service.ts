import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  EmpData: Employee[] = [
    { id: 1, fname: 'Rahul', lname: 'Kumar', salary: 50000, department: 'CSE'},
    { id: 2, fname: 'Vipul', lname: 'Kumar', salary: 50000, department: 'CSE'},
    { id: 3, fname: 'Sonali', lname: 'Kumari', salary: 50000, department: 'CSE'},
    { id: 4, fname: 'Nitu', lname: 'Kumari', salary: 50000, department: 'CSE'}
  ]

  company=[
    {id:1,name: 'Mits',address:[{city:'Jamshedpur'},{state:'Jharkhand'}]},
    {id:2,name: 'RedHat',address:[{city:'Bangalore'},{state:'Karnataka'}]},
    {id:3,name: 'WellsFargo',address:[{city:'Bangalore'},{state:'Karnataka'}]}
  ]

  dataList=[
    { id: 1, name: 'Rahul', description: {address: 'Ranchi', branch: 'CSE' ,college: 'MITM'}, status:'P'},
    { id: 2, name: 'Vipul', description: {address: 'Lohardaga',branch: 'CSE',college: 'MITM'}, status:'O'},
    { id: 3, name: 'Nitu', description: {address: 'Jamshedpur',branch: 'CSE',college: 'MITM'}, status:'G'}
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
