import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from './Manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthorizationService {
url1="http://localhost:8080/task-manager/manager/register"
url2="http://localhost:8080/task-manager/manager/login"
  constructor(private http:HttpClient) 
  { 

  }

  registerationdetails()
  {
    return this.http.get(this.url1)
  }
  // registerManager(managerdetails:Admin)
  // {
  //   return this.http.post(`${this.url2}/admin/addtask`,managerdetails);
  // }
  // getManagerByEmpId(empId:string)
  // {
  //   return this.http.get(`${this.url2}/admin/addtask?empId=${empId}`)
  // }

}
