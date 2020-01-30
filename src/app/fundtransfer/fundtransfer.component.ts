import { Component, OnInit } from '@angular/core';
import { PersonalInformation } from '../personalInformation';
import { TransactionDetails } from '../TransactionDetails';
import { AppServiceService } from '../appService.service';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {
  [x: string]: any;

  constructor(private service : AppServiceService) { }
  
  number;

  ngOnInit() {
    this.service.acc.subscribe(data => this.number = data);
   
  }


  personalInformation : PersonalInformation={
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

  transactionDetails : TransactionDetails = {
    transactionId : 0,
    fromAcc : this.number,
    toAcc : 0,
    amt : 0
  }
  
  getCurrentModel() { 
    return JSON.stringify( this.transactionDetails);
 
  }
  
  
  onSubmit(){
    
    this.service.fundtransfer(this.transactionDetails).subscribe(
      data => {
        alert("Your transaction id is:"+ data)
      },
      error => {
      alert("Insufficient funds")
      }
      )
  }
}
