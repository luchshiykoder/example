import { Component } from '@angular/core';
import  {trigger, state, style, transition, animate} from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}<h1>',
  styleUrls: ['./app.component.css'],
 

})

export class AppComponent {
  showMenu = false;
  showAside = false;

  title = 'todo';
  message = 'Welcome to in28Minutes';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

 
  
  // menuState:string = 'out';

  // toggleMenu() {
    // 1-line if statement that toggles the value:
  //   this.menuState = this.menuState === 'out' ? 'in' : 'out';
  // }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = this.activatedRoute.firstChild.snapshot.data.showMenu !== false;
        this.showAside = this.activatedRoute.firstChild.snapshot.data.showAside !== false;
       
      }
    });
  }
}
