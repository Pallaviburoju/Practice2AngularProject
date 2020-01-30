import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../appService.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {


  constructor(private router: Router, private service: AppServiceService) { }

  ngOnInit() {

  }

  deposit()
  {
    this.router.navigateByUrl("/deposit")
  }

  withdraw()
  {
    this.router.navigateByUrl("/withdraw")

  }

  fund()
  {
    this.router.navigateByUrl("/fundtransfer")
  }

  showbalance():void{
    this.service.showbalance().subscribe(res=>
      {
        alert("balance is :"+res)
      });
  }

}
