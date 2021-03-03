import { Component, OnInit } from '@angular/core';
import { TimeHeader } from './time-header';
import { TimeService } from './time.service';

@Component({
  selector: 'app-time-task',
  templateUrl: './time-task.component.html',
  styleUrls: ['./time-task.component.scss']
})
export class TimeTaskComponent implements OnInit {
  time_header: TimeHeader[] = [];

  constructor(private _timeService: TimeService) { }

  ngOnInit(): void {
    this.time_header = this._timeService.timeHeader
  }
  

}
