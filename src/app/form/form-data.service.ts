import { Injectable } from '@angular/core';
import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  
  constructor() { }
  public formData:Form[]=[
    {id: 1, name: 'Rahul', gender: 'male', status:'active', dob:'1997-05-08'}
  ]
}
