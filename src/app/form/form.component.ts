import { Component, OnInit } from '@angular/core';
import { Form } from './form';
import { FormDataService } from './form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formArray: Form = new Form()

  constructor(private _formService: FormDataService) { }

  ngOnInit(): void {
    this.formArray = this._formService.formData[0]
    console.log(this.formArray);
  }
  onSubmitClick(data) {
    //console.log(data);
    //debugger
    let date = new Date(data.dob)
    let month = date.toLocaleString('default', { month: 'long' })
    let day = date.getDate()
    let year = date.getFullYear()
    let newDate:string = `${day} ${month} ${year}`
    data.dob = newDate;
    console.log(newDate);
    this._formService.formData.splice(0, 1, data)
    alert(JSON.stringify(this._formService.formData, null, 2));
  }
}
