import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ManagerprofileComponent } from './managerprofile/managerprofile.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { TaskassignmentComponent } from './taskassignment/taskassignment.component';
import { FormBuilder } from '@angular/forms';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';

const routes: Routes = [

  {
    path:"",redirectTo:'/managerlogin',pathMatch:'full'
  },
  {
    path:"managerlogin",component:ManagerloginComponent
  },
  {
    path:"manager-dashboard",component:ManagerDashboardComponent
  },
  {
    path:"manager/managerprofile",component:ManagerprofileComponent
  },
  {
    path:"manager/tasklist",component:TasklistComponent
  },
  {
    path:"manager/employeelist",component:EmployeeslistComponent
  },
  {
    path:"manager/taskassignment",component:TaskassignmentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
