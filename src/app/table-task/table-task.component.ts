import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Task } from './task';

@Component({
  selector: 'app-table-task',
  templateUrl: './table-task.component.html',
  styleUrls: ['./table-task.component.scss']
})
export class TableTaskComponent implements OnInit {
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']

  public taskData: Task[] = [
    { task: ' Task1', date: "01-01-2020" },
    { task: ' Task2', date: "03-01-2020" },
    { task: ' Task3', date: "05-01-2020" },
    { task: ' Task4', date: "07-01-2020" },
    { task: ' Task5', date: "12-01-2020" }
  ]

  public emptyArray=[];
  public indexArray=[];
  public monthsArray:{month:string, firstDate:any, lastDate:any}[]=[]
  constructor() {
  }

  ngOnInit(): void {
    for (let i of this.taskData) {
      let newDate = new Date(i.date)
      let month:string = newDate.toLocaleString('default', { month: 'long' })
     this.emptyArray.push(month)
    }
   console.log(this.emptyArray);

 let value= moment.months()
 let date = new Date()
 let year = date.getFullYear()
 //console.log(value);

 for(let i of value){
   let newDate = new Date(i+year)
   let first = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
   let last= new Date(newDate.getFullYear(), newDate.getMonth()+1,0)
   let firstDate = first.getDate()
   let lastDate = last.getDate()
   //console.log(firstDate,lastDate);
   this.monthsArray.push({month: i,firstDate: firstDate, lastDate: lastDate})
 }
 console.log(this.monthsArray);
 
  }

}
