import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { AppServiceService } from '../appService.service';
import { CookieService } from 'ngx-cookie-service';
import { Details } from '../Details';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  empData : string[];
  company : string;
  constructor(private empService : AppServiceService, private cookieService: CookieService, private service: AppServiceService) { }

  details: Details={
    nme: ''
  }
  ngOnInit() {
    // this.empService.getData().subscribe(data => {
    //   this.empData = data as string[];
    //   console.log(this.empData)
    // },
    // (err: HttpErrorResponse) => {
    //   console.log (err.message);
    // })
  }
 
  count : number=0;
  title : string;
  onclick(){
    this.count = this.count+1;
    console.log(this.count)
  }

  data(){
    this.title = "hello"
  }

  numberA: number = 10;  
  numberB: number = 20;  
  
  addTwoNumbers() {  
    return this.numberA + this.numberB;  
  } 

  afterlocalStrge(){
    //getting values from localstorage, sessionstorage and cookieStorage
   console.log( localStorage.getItem(this.service.stored))
   console.log(sessionStorage.getItem(this.service.stored))
   console.log(this.cookieService.get(this.service.stored))
   this.deleteLS()
  }

  deleteLS(){
    //removing values of localstorage, sessionstorage and cookieStorage
    localStorage.removeItem(this.service.stored)
    sessionStorage.removeItem(this.service.stored)
    this.cookieService.delete(this.service.stored)
  }

}
