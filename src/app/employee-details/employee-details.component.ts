import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpDataService } from '../emp-data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() cIndex
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  urlId: any;
  empId;
  isIdDisabled = true;
  emp: Employee = new Employee()
  constructor(private _empService: EmpDataService, private _actRouter: ActivatedRoute, private _location: Location, private _router: Router) {
    this.urlId = _actRouter.snapshot.params['id']
  }

  ngOnInit(): void {
    /*When urlId is 0 */
    if (this.urlId == 0) {
      this.isIdDisabled = false
    }

    /*When urlId is greater than 0 */
    if (this.urlId > 0) {
      //debugger
      for (let i of this._empService.EmpData) {
        if (i.id == this.urlId) {
          this.empId = i.id;
          this.emp = i;
          return
        }
      }
    }
    /* When urlId is not found*/
    if (!this.urlId) {
      this.emp = this._empService.EmpData[this.cIndex]
    }
  }
  getValue(data: Employee) {
    if (this.urlId == 0) {
      this._empService.addEmp(data);
      this._location.back()
    }
    else if (this.urlId > 0) {
      //debugger
      data['id'] = this.empId
      this._empService.updateEmp(data, undefined, this.empId)
      this._router.navigate(['/employee-list'])
    }
    else {
      data['id'] = this._empService.EmpData[this.cIndex].id
      this._empService.updateEmp(data, this.cIndex, undefined)
      this.toggle.emit(this.cIndex)
    }
  }
}
