import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerAuthorizationService } from '../manager-authorization.service';
import { error } from 'console';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrl: './managerlogin.component.css'
})

export class ManagerloginComponent
{
  ManagerloginForm:FormGroup
  router: any;

constructor(private fb: FormBuilder,private route:Router,private ar:ActivatedRoute,private ms:ManagerAuthorizationService) 
{

    // this.route.queryParams.subscribe((params )=> {
    //   this.registrationSuccess = params['success'] === 'true';
    //  });
  this.ManagerloginForm = this.fb.group({
    manageremailid: ['', [Validators.required]],
    password:['',[Validators.required]]

  });
}
  
registrationSuccess=false;

submit=false;
get manageremailid()
{
  return this.ManagerloginForm.get('manageremailid')
}
get password()
{
  return this.ManagerloginForm.get('password')
}
  
ngOnInit()
{
   //this.registrationSuccess=true;
}
fetchdata()
{
  this.ms.registerationdetails().subscribe((data)=>{console.log(data),
                                          console.error("Error occured")})
}
  // redirectTomanagerdashbard()
  // {
   
  //   this.route.navigate(['/manager-dashboard'])
  // }
onSubmit() 
{
  this.submit=true;
    // const{empId,password}=this.ManagerloginForm.value;
    // this.service. getManagerByEmpId(empId as string).subscribe(
    //   response=>{

    //     if(response[0].password===password)
    //     {
    //       sessionStorage.setItem('empId',empId as string)
    //       console.log(response)
    //       this.route.navigate(['/addtask'])
    //     }
    //   }
    //   ,
    //   errors=>{
    //     console.log(errors)
    //   }
    // )
   
    this.route.navigate(['/manager-dashboard'])
}
}
