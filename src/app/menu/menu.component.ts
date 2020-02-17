import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

  
})

export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;
  show = false;

  showMenu = true;
  showAside = true;


  alertPrimary = false;
  addClass(){
    this.alertPrimary = true;
  }
 
  
  constructor(private hardcodedAuthenticationService 
    : HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn(); 
     
  }
  
 

}
