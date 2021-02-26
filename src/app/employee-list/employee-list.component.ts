import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ArrayList } from '../array-list';
import { EmpDataService } from '../emp-data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  EmpDatas: Employee[];
  newArray: any[] = [];
  newCompany: any[] = []
  index;
  arrayData;
  constructor(private _empService: EmpDataService) {
    for (let i of _empService.EmpData) {
      this.newArray.push(false);
    }
    //console.log(this.newArray);

  }

  ngOnInit(): void {
    this.EmpDatas = this._empService.EmpData;
    //console.log(this.EmpDatas);
    this.newCompany = this._empService.company
    console.log(this.newCompany);
    this.arrayData = this._empService.dataList
    console.log(this.arrayData);

  }

  toggleON(index) {
    this.index = index
    for (let i = 0; i < this.newArray.length; i++) {
      if (i == this.index) {
        if (this.newArray[i] == false) {
          this.newArray[i] = true;
        } else {
          this.newArray[i] = false;
        }
      } else {
        this.newArray[i] = false;
      }
    }
  }
  avgResult: any;
  num1: number;
  num2: number;
  num3: number;
  num4: number;

  getAvgData() {
    (this.num1 && this.num2 && this.num3 && this.num4) ? this.avgResult = `Average of four value is ${(this.num1 + this.num2 + this.num3 + this.num4) / 4}`
      : (this.num1 && this.num2 && this.num3) ? this.avgResult = `Average of four value is ${(this.num1 + this.num2 + this.num3) / 3}`
        : (this.num2 && this.num3 && this.num4) ? this.avgResult = `Average of three value is ${(this.num2 + this.num3 + this.num4) / 3}`
          : (this.num3 && this.num4 && this.num1) ? this.avgResult = `Average of three value is ${(this.num1 + this.num3 + this.num4) / 3}`
            : (this.num2 && this.num4 && this.num1) ? this.avgResult = `Average of three value is ${(this.num1 + this.num2 + this.num4) / 3}`
              : (this.num1 && this.num2) ? this.avgResult = `Average of two value is ${(this.num1 + this.num2) / 2}`
                : (this.num1 && this.num3) ? this.avgResult = `Average of two value is ${(this.num1 + this.num3) / 2}`
                  : (this.num1 && this.num4) ? this.avgResult = `Average of two value is ${(this.num1 + this.num4) / 2}`
                    : (this.num2 && this.num3) ? this.avgResult = `Average of two value is ${(this.num2 + this.num3) / 2}`
                      : (this.num2 && this.num4) ? this.avgResult = `Average of two value is ${(this.num2 + this.num4) / 2}`
                        : (this.num3 && this.num4) ? this.avgResult = `Average of two value is ${(this.num3 + this.num4) / 2}`
                          : (this.num1) ? this.avgResult = `Average of one value is ${(this.num1) / 1}`
                            : (this.num2) ? this.avgResult = `Average of one value is ${(this.num2) / 1}`
                              : (this.num3) ? this.avgResult = `Average of one value is ${(this.num3) / 1}`
                                : (this.num4) ? this.avgResult = `Average of one value is ${(this.num4) / 1}`
                                  : this.avgResult = `Give at least one value for operation`
  }

  // getData() {
  //   //console.log(this.num1,this.num2,this.num3,this.num4)
  //   if (this.num1 && this.num2 && this.num3 && this.num4) {
  //     let avg = (this.num1 + this.num2 + this.num3 + this.num4) / 4
  //     this.avgResult = `Average of four value is ${avg}`
  //   }
  //   else if (this.num1 && this.num2 && this.num3) {
  //     let avg = (this.num1 + this.num2 + this.num3) / 3
  //     this.avgResult = `Average of three value is ${avg}`
  //   }
  //   else if (this.num2 && this.num3 && this.num4) {
  //     let avg = (this.num2 + this.num3 + this.num4) / 3
  //     this.avgResult = `Average of three value is ${avg}`
  //   }
  //   else if (this.num3 && this.num4 && this.num1) {
  //     let avg = (this.num1 + this.num3 + this.num4) / 3
  //     this.avgResult = `Average of three value is ${avg}`
  //   }
  //   else if (this.num2 && this.num4 && this.num1) {
  //     let avg = (this.num1 + this.num2 + this.num4) / 3
  //     this.avgResult = `Average of three value is ${avg}`
  //   }
  //   else if (this.num1 && this.num2) {
  //     let avg = (this.num1 + this.num2) / 2
  //     this.avgResult = `Average of two value is ${avg}`
  //     //console.log('hi')
  //   }
  //   else if (this.num1 && this.num3) {
  //     let avg = (this.num1 + this.num3) / 2
  //     this.avgResult = `Average of two value is ${avg}`
  //     //console.log('hi')
  //   }
  //   else if (this.num1 && this.num4) {
  //     let avg = (this.num1 + this.num4) / 2
  //     this.avgResult = `Average of two value is ${avg}`
  //     //console.log('hi')
  //   }
  //   else if (this.num2 && this.num3) {
  //     let avg = (this.num2 + this.num3) / 2
  //     this.avgResult = `Average of two value is ${avg}`
  //     //console.log('hi')
  //   }
  //   else if (this.num2 && this.num4) {
  //     let avg = (this.num2 + this.num4) / 2
  //     this.avgResult = `Average of two value is ${avg}`
  //     //console.log('hi')
  //   }
  //   else if (this.num3 && this.num4) {
  //     let avg = (this.num3 + this.num4) / 2
  //     this.avgResult = `Average of two value is ${avg}`
  //     //console.log('hi')
  //   }
  //   else if (this.num1) {
  //     let avg = (this.num1) / 1
  //     this.avgResult = `Average of one value is ${avg}`
  //     //console.log('hi');
  //   }
  //   else if (this.num2) {
  //     let avg = (this.num2) / 1
  //     this.avgResult = `Average of one value is ${avg}`
  //     //console.log('hi');
  //   }
  //   else if (this.num3) {
  //     let avg = (this.num3) / 1
  //     this.avgResult = `Average of one value is ${avg}`
  //     //console.log('hi');
  //   }
  //   else if (this.num4) {
  //     let avg = (this.num4) / 1
  //     this.avgResult = `Average of one value is ${avg}`
  //     //console.log('hi');
  //   }
  //   else{
  //     this.avgResult = `Give at least one value for operation`
  //   }
  // }
  num1c: number;
  num2c: number;
  num3c: number;
  num4c: number;
  comResult: any;
  getComData() {
    if ((this.num1c || this.num1c == 0) && (this.num2c || this.num2c == 0) && (this.num3c || this.num3c == 0) && (this.num4c || this.num4c == 0)) {
      // greater than section start 
      if (this.num1c > this.num2c && this.num1c > this.num3c && this.num1c > this.num4c) {
        this.comResult = `${this.num1c} is greater than ${this.num2c},${this.num3c},${this.num4c} `
      }
      else if (this.num2c > this.num1c && this.num2c > this.num3c && this.num2c > this.num4c) {
        this.comResult = `${this.num2c} is greater than ${this.num1c},${this.num3c},${this.num4c} `
      }
      else if (this.num3c > this.num1c && this.num3c > this.num2c && this.num3c > this.num4c) {
        this.comResult = `${this.num3c} is greater than ${this.num1c},${this.num2c},${this.num4c} `
      }
      else if (this.num4c > this.num1c && this.num4c > this.num2c && this.num4c > this.num3c) {
        this.comResult = `${this.num4c} is greater than ${this.num1c},${this.num2c},${this.num3c} `
      }
      // less than section start
      else if (this.num1c < this.num2c && this.num1c < this.num3c && this.num1c < this.num4c) {
        this.comResult = `${this.num1c} is less than ${this.num2c},${this.num3c},${this.num4c} `
      }
      else if (this.num2c < this.num1c && this.num2c < this.num3c && this.num2c < this.num4c) {
        this.comResult = `${this.num2c} is less than ${this.num1c},${this.num3c},${this.num4c} `
      }
      else if (this.num3c < this.num1c && this.num3c < this.num2c && this.num3c < this.num4c) {
        this.comResult = `${this.num3c} is less than ${this.num1c},${this.num2c},${this.num4c} `
      }
      else if (this.num4c < this.num1c && this.num4c < this.num2c && this.num4c < this.num3c) {
        this.comResult = `${this.num4c} is less than ${this.num1c},${this.num2c},${this.num3c} `
      }
      //equal to section start
      else if (this.num1c == this.num2c && this.num1c == this.num3c && this.num1c == this.num4c) {
        this.comResult = `${this.num1c} is equal with ${this.num2c},${this.num3c},${this.num4c} `
      }
    }
    else if (
      (this.num1c || this.num1c == 0) && (this.num2c || this.num2c == 0) && (this.num3c || this.num3c == 0) ||
      (this.num2c || this.num2c == 0) && (this.num3c || this.num3c == 0) && (this.num4c || this.num4c == 0) ||
      (this.num3c || this.num3c == 0) && (this.num4c || this.num4c == 0) && (this.num1c || this.num1c == 0) ||
      (this.num1c || this.num1c == 0) && (this.num2c || this.num2c == 0) && (this.num4c || this.num4c == 0)
    ) {
      debugger
      //greater than section start
      if (this.num1c > this.num2c && this.num1c > this.num3c && (this.num1c != null && this.num2c != null && this.num3c != null)) {
        this.comResult = `${this.num1c} is greater than ${this.num2c},${this.num3c}`
      }
      else if (this.num2c > this.num1c && this.num2c > this.num3c && (this.num1c != null && this.num2c != null && this.num3c != null)) {
        this.comResult = `${this.num2c} is greater than ${this.num1c},${this.num3c}`
      }
      else if (this.num3c > this.num1c && this.num3c > this.num2c && (this.num1c != null && this.num2c != null && this.num3c != null)) {
        this.comResult = `${this.num3c} is greater than ${this.num1c},${this.num2c}`
      }
      // this.num2c && this.num3c && this.num4c
      else if (this.num2c > this.num3c && this.num2c > this.num4c && (this.num2c != null && this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num2c} is greater than ${this.num3c},${this.num4c}`
      }
      else if (this.num3c > this.num2c && this.num3c > this.num4c && (this.num3c != null && this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num3c} is greater than ${this.num2c},${this.num4c}`
      }
      else if (this.num4c > this.num2c && this.num4c > this.num3c && (this.num3c != null && this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num4c} is greater than ${this.num2c},${this.num3c}`
      }
      // this.num3c && this.num4c && this.num1c
      else if (this.num3c > this.num4c && this.num3c > this.num1c && (this.num3c != null && this.num4c != null && this.num1c != null)) {
        this.comResult = `${this.num3c} is greater than ${this.num1c},${this.num4c}`
      }
      else if (this.num4c > this.num1c && this.num4c > this.num3c && (this.num3c != null && this.num4c != null && this.num1c != null)) {
        this.comResult = `${this.num4c} is greater than ${this.num1c},${this.num3c}`
      }
      else if (this.num1c > this.num3c && this.num1c > this.num4c && (this.num3c != null && this.num4c != null && this.num1c != null)) {
        this.comResult = `${this.num1c} is greater than ${this.num3c},${this.num4c}`
      }
      // this.num1c && this.num2c && this.num4c
      else if (this.num1c > this.num2c && this.num1c > this.num4c && (this.num1c != null && this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num1c} is greater than ${this.num2c},${this.num4c}`
      }
      else if (this.num2c > this.num1c && this.num2c > this.num4c && (this.num1c != null && this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num2c} is greater than ${this.num1c},${this.num4c}`
      }
      else if (this.num4c > this.num1c && this.num4c > this.num2c && (this.num1c != null && this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num4c} is greater than ${this.num1c},${this.num2c}`
      }
      // less than section start
      else if (this.num1c < this.num2c && this.num1c < this.num3c && (this.num1c != null && this.num2c != null && this.num3c != null)) {
        this.comResult = `${this.num1c} is less than ${this.num2c},${this.num3c}`
      }
      else if (this.num2c < this.num1c && this.num2c < this.num3c && (this.num1c != null && this.num2c != null && this.num3c != null)) {
        this.comResult = `${this.num2c} is less than ${this.num1c},${this.num3c}`
      }
      else if (this.num3c < this.num1c && this.num3c < this.num2c && (this.num1c != null && this.num2c != null && this.num3c != null)) {
        this.comResult = `${this.num3c} is less than ${this.num1c},${this.num2c}`
      }

      // this.num2c && this.num3c && this.num4c
      else if (this.num2c < this.num3c && this.num2c < this.num4c && (this.num2c != null && this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num2c} is less than ${this.num3c},${this.num4c}`
      }
      else if (this.num3c < this.num2c && this.num3c < this.num4c && (this.num2c != null && this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num3c} is less than ${this.num2c},${this.num4c}`
      }
      else if (this.num4c < this.num2c && this.num4c < this.num3c && (this.num2c != null && this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num4c} is less than ${this.num2c},${this.num3c}`
      }
      else if (this.num2c == this.num3c && this.num2c == this.num4c && (this.num2c != undefined && this.num3c != undefined && this.num4c != undefined)) {
        this.comResult = `${this.num2c} is equal with ${this.num3c},${this.num4c}`
      }
      // this.num3c && this.num4c && this.num1c
      else if (this.num3c < this.num4c && this.num3c < this.num1c && (this.num1c != null && this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num3c} is less than ${this.num1c},${this.num4c}`
      }
      else if (this.num4c < this.num1c && this.num4c < this.num3c && (this.num1c != null && this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num4c} is less than ${this.num1c},${this.num3c}`
      }
      else if (this.num1c < this.num3c && this.num1c < this.num4c && (this.num1c != null && this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num1c} is less than ${this.num3c},${this.num4c}`
      }
      else if (this.num3c == this.num4c && this.num3c == this.num1c && (this.num1c != undefined && this.num3c != undefined && this.num4c != undefined)) {
        this.comResult = `${this.num3c} is equal with ${this.num1c},${this.num4c}`
      }
      // this.num1c && this.num2c && this.num4c
      else if (this.num1c < this.num2c && this.num1c < this.num4c && (this.num1c != null && this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num1c} is less than ${this.num2c},${this.num4c}`
      }
      else if (this.num2c < this.num1c && this.num2c < this.num4c && (this.num1c != null && this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num2c} is less than ${this.num1c},${this.num4c}`
      }
      else if (this.num4c < this.num1c && this.num4c < this.num2c && (this.num1c != null && this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num4c} is less than ${this.num1c},${this.num2c}`
      }
      else if (this.num1c == this.num2c && this.num1c == this.num4c && (this.num1c != undefined && this.num2c != undefined && this.num4c != undefined)) {
        this.comResult = `${this.num1c} is equal with ${this.num2c},${this.num4c}`
      }
      // equal to section start
      else if (this.num1c == this.num2c && this.num1c == this.num3c && (this.num1c != undefined && this.num2c != undefined && this.num3c != undefined)) {
        this.comResult = `${this.num1c} is equal with ${this.num2c},${this.num3c}`
      }

    }
    else if (
      (this.num1c || this.num1c == 0) && (this.num2c || this.num2c == 0) ||
      (this.num2c || this.num2c == 0) && (this.num3c || this.num3c == 0) ||
      (this.num3c || this.num3c == 0) && (this.num4c || this.num4c == 0) ||
      (this.num1c || this.num1c == 0) && (this.num4c || this.num4c == 0) ||
      (this.num1c || this.num1c == 0) && (this.num3c || this.num3c == 0) ||
      (this.num2c || this.num2c == 0) && (this.num4c || this.num4c == 0)
    ) {
      //debugger
      if (this.num1c > this.num2c && (this.num1c != null && this.num2c != null)) {
        this.comResult = `${this.num1c} is greater than ${this.num2c}`
      }
      else if (this.num1c < this.num2c && (this.num1c != null && this.num2c != null)) {
        this.comResult = `${this.num1c} is less than ${this.num2c}`
      }
      else if (this.num1c == this.num2c && (this.num1c != undefined && this.num2c != undefined)) {
        this.comResult = `${this.num1c} is equal with ${this.num2c}`
      }

      else if (this.num2c > this.num3c && (this.num2c != null && this.num3c != null)) {
        this.comResult = `${this.num2c} is greater than ${this.num3c}`
      }
      else if (this.num2c < this.num3c && (this.num2c != null && this.num3c != null)) {
        this.comResult = `${this.num2c} is less than ${this.num3c}`
      }
      else if (this.num2c == this.num3c && (this.num2c != undefined && this.num3c != undefined)) {
        this.comResult = `${this.num2c} is equal with ${this.num3c}`
      }
      else if (this.num3c > this.num4c && (this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num3c} is greater than ${this.num4c}`
      }
      else if (this.num3c < this.num4c && (this.num3c != null && this.num4c != null)) {
        this.comResult = `${this.num3c} is less than ${this.num4c}`
      }
      else if (this.num3c == this.num4c && (this.num3c != undefined && this.num4c != undefined)) {
        this.comResult = `${this.num3c} is equal with ${this.num4c}`
      }

      else if (this.num1c > this.num4c && (this.num1c != null && this.num4c != null)) {
        this.comResult = `${this.num1c} is greater than ${this.num4c}`
      }
      else if (this.num1c < this.num4c && (this.num1c != null && this.num4c != null)) {
        this.comResult = `${this.num1c} is less than ${this.num4c}`
      }
      else if (this.num1c == this.num4c && (this.num1c != undefined && this.num4c != undefined)) {
        this.comResult = `${this.num1c} is equal with ${this.num4c}`
      }

      else if (this.num1c > this.num3c && (this.num1c != null && this.num3c != null)) {
        this.comResult = `${this.num1c} is greater than ${this.num3c}`
      }
      else if (this.num1c < this.num3c && (this.num1c != null && this.num3c != null)) {
        this.comResult = `${this.num1c} is less than ${this.num3c}`
      }
      else if (this.num1c == this.num3c && (this.num1c != undefined && this.num3c != undefined)) {
        this.comResult = `${this.num1c} is equal with ${this.num3c}`
      }

      else if (this.num2c > this.num4c && (this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num2c} is greater than ${this.num4c}`
      }
      else if (this.num2c < this.num4c && (this.num2c != null && this.num4c != null)) {
        this.comResult = `${this.num2c} is less than ${this.num4c}`
      }
      else if (this.num2c == this.num4c && (this.num2c != undefined && this.num4c != undefined)) {
        this.comResult = `${this.num2c} is equal with ${this.num4c}`
      }
    }
    else if ((this.num1c || this.num1c == 0) || (this.num2c || this.num2c == 0) || (this.num3c || this.num3c == 0) || (this.num4c || this.num4c == 0)) {
      this.comResult = 'Give at least two value for comparision.'
    }
    else {
      this.comResult = 'Input boxes are empty, please give at least two value for comparision.'
    }
  }
  /*Dynamic color and desc in model view */

  descObject: ArrayList = new ArrayList()
  listIndex(id) {
    //debugger
    for (let i of this._empService.dataList) {
      if (i.id == id) {
        this.descObject = i.description
      }
    }
    console.log(this.descObject);
  }
  getColor(status) {
    switch (status) {
      case 'P':
        return 'pink';
      case 'O':
        return 'orange';
      case 'G':
        return 'gray';
    }
  }
}