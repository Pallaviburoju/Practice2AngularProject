import { Component, OnInit } from '@angular/core';
import { PersonalInformation } from '../personalInformation';
import { AppServiceService } from '../appService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : AppServiceService, private router: Router) { }

  ngOnInit() {
  }
  loggedIn : boolean=false;

  loginInformation:PersonalInformation={
    customerId : 0,
    customerName: '',
    customerEmail: '',
    customerPassword: '',
    customerPhoneNumber:'',
    customerAddress:'',
    customerCity: '',
    customerCountry: '',
    customerZip: '',
    customerBalance: 0

  };


  onSubmit(){
  
    if(this.loginInformation.customerId == 0 && this.loginInformation.customerPassword == "")
    {
    alert("Enter all fields")
    }

    else{
      this.loggedIn = true;
      return this.service.login(this.loginInformation).subscribe(data => 
        { 
          console.log(data)
          if(data!=0){
        alert("Loggedin successfully with customer id: "+ data)
        this.router.navigateByUrl("/operations")
          }
          else    alert("Enter valid details")
          
        });
      }
  }


}