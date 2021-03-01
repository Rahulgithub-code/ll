import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Address } from './address';
import { Company } from './company';
import { DataService } from './data.service';

@Component({
  selector: 'app-company-address-paging-task',
  templateUrl: './company-address-paging-task.component.html',
  styleUrls: ['./company-address-paging-task.component.scss']
})
export class CompanyAddressPagingTaskComponent implements OnInit {

  company: Company[];
  address: Address[];
  totalRecords: number;
  page: number = 1;
  addressArray = []
  notFoundMsg: string;
  itemsPerPageLength: number;
  constructor(private _dataService: DataService) {
  }

  ngOnInit(): void {

    this.company = this._dataService.company;
    this.address = this._dataService.address;
    this.totalRecords = this._dataService.company.length
    this.itemsPerPageLength = 5
    //console.log(this.company);
    //console.log(this.address);
  }
  showDetails(id: number) {
    this.addressArray.splice(0, this.addressArray.length)
    this.notFoundMsg = null
    console.log(id);
    for (let i of this.address) {
      if (id == i.c_id) {
        this.addressArray.push(i)
      }
    }

    console.log(this.addressArray);
    if (this.addressArray.length == 0) {
      this.notFoundMsg = "Address Not Found."
    }
    console.log(this.notFoundMsg);

  }
  change(i: number) {
    this.itemsPerPageLength = i
  }

  idArray= new Array();
  onChange(id,value) {
    if(value==true){
      this.idArray.push({id:id});
    }
    else{
      for(let i=0; i<this.idArray.length;i++){
        if(id==this.idArray[i].id){
          let index = this.idArray.indexOf(this.idArray[i])
          this.idArray.splice(index,1)
        }
      }
    }
    console.log(this.idArray);
  }
  remove(){
    //debugger
    for(let i=0; i<this.company.length;i++){
      for(let j=0;j<this.idArray.length;j++){
        if(this.company[i].id==this.idArray[j].id){
          let index = this.company.indexOf(this.company[i])
          this.company.splice(index,1)
        }
      }
    }
    this.idArray.splice(0, this.idArray.length);
    this.totalRecords =this.company.length;
  }
}
