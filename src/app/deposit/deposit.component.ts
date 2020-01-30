import { Component, OnInit } from '@angular/core';
import { TransactionDetails } from '../TransactionDetails';
import { PersonalInformation } from '../personalInformation';
import { AppServiceService } from '../appService.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

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

  getCurrentModel() { 
    return JSON.stringify(this.personalInformation); 
  }

  onSubmit(){
    
    this.service.deposit(this.personalInformation.customerBalance).subscribe(
    data => { alert(data+ " rupees is the balance after depositing")});

      alert("Amount deposited successfully")
  }
}
