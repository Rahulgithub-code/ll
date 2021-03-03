import { Injectable } from '@angular/core';
import { TimeHeader } from './time-header';
import { TimeLine } from './time-line';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
  timeHeader:TimeHeader[]=[
    {id:1, start_date:"2021-02-01", end_date:"2021-02-10", total_hours:0}
  ]
  timeLine:TimeLine[]=[
    
  ]
}
