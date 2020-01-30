import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Details } from '../Details'
import { AppServiceService } from '../appService.service';
@Component({
  selector: 'app-local-strge',
  templateUrl: './local-strge.component.html',
  styleUrls: ['./local-strge.component.css']
})
export class LocalStrgeComponent implements OnInit {

  constructor(private cookieService: CookieService, private service: AppServiceService) { }

  ngOnInit() {
  }
  details:Details={
   nme : ''
  }
  onSubmit(){
    console.log(this.details.nme)
    //setting values into localstorage, sessionstorage and cookieStorage
    localStorage.setItem(this.details.nme, "This is localStorage name")
    sessionStorage.setItem(this.details.nme, "This is sessionStorage name")
    this.cookieService.set(this.details.nme, "This is cookie name");
    // To send key value into service so that we can retrieve that data in other components
    this.service.dataStore(this.details.nme);
  }
}
