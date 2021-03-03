import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyAddressPagingTaskComponent } from './company-address-paging-task/company-address-paging-task.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormComponent } from './form/form.component';
import { TableTaskComponent } from './table-task/table-task.component';
import { TimeDetailsComponent } from './time-task/time-details/time-details.component';
import { TimeTaskComponent } from './time-task/time-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-list/:id', component: EmployeeDetailsComponent },
  { path: 'form', component: FormComponent },
  { path: 'table-task', component: TableTaskComponent },
  { path: 'paging-task', component: CompanyAddressPagingTaskComponent },
  { path: 'time-task', component: TimeTaskComponent },
  { path: 'time-task/:id', component: TimeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
