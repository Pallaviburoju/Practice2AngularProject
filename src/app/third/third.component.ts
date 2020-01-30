import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

  myClickFunction(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
 }

 months = ["Jan", "Feb", "Mar", "Apr"]

 changeMonth(event){
   console.log(event)
 }
}
