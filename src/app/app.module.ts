import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormComponent } from './form/form.component';
import { TableTaskComponent } from './table-task/table-task.component';
import { CompanyAddressPagingTaskComponent } from './company-address-paging-task/company-address-paging-task.component'
import {NgxPaginationModule} from 'ngx-pagination';
import { TimeTaskComponent } from './time-task/time-task.component';
import { TimeDetailsComponent } from './time-task/time-details/time-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    FormComponent,
    TableTaskComponent,
    CompanyAddressPagingTaskComponent,
    TimeTaskComponent,
    TimeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
