import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeHeader } from '../time-header';
import { TimeLine } from '../time-line';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-details',
  templateUrl: './time-details.component.html',
  styleUrls: ['./time-details.component.scss']
})
export class TimeDetailsComponent implements OnInit {

  hideShow;
  hideShowForm;
  url_id:number;
  header_data:TimeHeader = new TimeHeader();
  timeLine_data:TimeLine[]=[];

  constructor(private _actRouter:ActivatedRoute, private _timeService:TimeService, private _router:Router) {
    this.url_id=this._actRouter.snapshot.params['id']
    console.log(this.url_id);
   }

  ngOnInit(): void {
    if(this.url_id==0){
      console.log("Enter new record");
      this.hideShow="none";
    }
    else if(this.url_id>0){
      console.log("edit mode");
      this.hideShow="block";
      this.hideShowForm="none"
      //console.log("Bind data");
      for(let i=0; i<this._timeService.timeHeader.length;i++){
        if(this.url_id==this._timeService.timeHeader[i].id){
          this.header_data=this._timeService.timeHeader[i]
        }
      }
      this.updateList() 
     // console.log(this.header_data.total_hours);
    }
    
  }
  updateList(){
    this.header_data.total_hours=null
    for(let i of this._timeService.timeLine){
      if(i.fkey==this.url_id){
        this.timeLine_data.push(i);
        this.header_data.total_hours+=i.hours;
      }
    }
  }
  onSubmit(form:NgForm) {
    form.value['id']=this._timeService.timeHeader.length+1;
    this._timeService.timeHeader.push(form.value);
    this._router.navigate([`time-task/${form.value['id']}`]);
    console.log(form.value);
    this.url_id=form.value['id'];
    this.ngOnInit();

  }
  showForm(){
    this.hideShowForm="block"
  }
  onTaskDataSubmit(form:NgForm){
    this.timeLine_data.splice(0,this.timeLine_data.length);
    form.value['id']=this._timeService.timeLine.length+1;
    form.value['fkey']=(+this.url_id);
    this._timeService.timeLine.push(form.value)
    this.updateList();
    console.log(this._timeService.timeLine);
    this.hideShowForm="none";
    form.resetForm();
  }
}
