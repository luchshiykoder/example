import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';

@Component({
  selector: 'app-asidemenu',
  templateUrl: './asidemenu.component.html',
  styleUrls: ['./asidemenu.component.css']
})
export class AsidemenuComponent implements OnInit {
 //isUserLoggedIn: boolean = false;

 constructor(private hardcodedAuthenticationService 
  : HardcodedAuthenticationService) { }
 // alertPrimary = false;
 alertPrimary = false;
 addClass(){
   this.alertPrimary = true;
 }

ngOnInit() {
  //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
 
  
}

}


