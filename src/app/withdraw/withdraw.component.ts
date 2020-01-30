import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../appService.service';
import { PersonalInformation } from '../personalInformation';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private service: AppServiceService) { }

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

  getCurrentModel() { 
    return JSON.stringify(this.personalInformation); 
  }


  onSubmit(){
    this.service.withdraw(this.personalInformation.customerBalance).subscribe(
      data => { 
        console.log(this.personalInformation.customerBalance)
        console.log(data)
        if(data == 0){
        alert("Insufficient balance")
        }
        else{
        alert("Amount successfully withdrawn. Balance is "+ data)
      }
  });
}
}
