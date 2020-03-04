import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {PocService} from '../service/poc/poc.service';
import {PocModelInterface} from '../model/PocModel'

@Component({
  selector: 'app-poc-list',
  templateUrl: './poc-list.component.html',
  styleUrls: ['./poc-list.component.scss']
})
export class PocListComponent implements OnInit {

  users: Observable<PocModelInterface[]>;
  constructor(private pocService:PocService,
    private router:Router) { }


  ngOnInit() {
    this.reloadData();
  }
  reloadData() {    
    this.users = this.pocService.retrieveAllUser();
  }
  getUserList(id: number){
    this.router.navigate(['details', id]);
  }
}
