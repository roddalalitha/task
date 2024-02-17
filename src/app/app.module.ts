import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerprofileComponent } from './managerprofile/managerprofile.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { TaskassignmentComponent } from './taskassignment/taskassignment.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManagerDashboardComponent,
    ManagerprofileComponent,
    TasklistComponent,
    EmployeeslistComponent,
    ManagerloginComponent,
    TaskassignmentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
