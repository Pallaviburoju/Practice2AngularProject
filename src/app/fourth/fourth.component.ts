import { Component, OnInit } from '@angular/core';
import { PersonalInformation } from '../personalInformation';
import { AppServiceService } from '../appService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor(private service : AppServiceService) { }

  ngOnInit() {
  }

  personalInformation:PersonalInformation={
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

  submitted = false;

  onSubmit(){
    this.submitted = true;

     console.log(this.personalInformation)

      if(this.personalInformation.customerName == " " || this.personalInformation.customerPassword == "" || this.personalInformation.customerPhoneNumber == "" || this.personalInformation.customerZip == "" || this.personalInformation.customerAddress == "" || this.personalInformation.customerCity == "" || this.personalInformation.customerCountry == "" || this.personalInformation.customerEmail == ""){
        alert("Enter all fields")
      }

else{
    return this.service.sendData(this.personalInformation).subscribe(data => {
      alert("Successfully created with customer id: " + data)
    });
    
  }
  }

   getCurrentModel() { 
    return JSON.stringify(this.personalInformation); 
  }

}
