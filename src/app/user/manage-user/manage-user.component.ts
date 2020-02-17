import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserService} from '../../service/user/user.service';
import {User} from '../User'

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  users: Observable<User[]>;
  constructor(private userService:UserService,
    private router:Router) { }

    
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    
    this.users = this.userService.retrieveAllUser();
  }
  
  // elements: any = [
  //   {userid: '1', username: 'Jagdeep', emailid: 'jag@mdo', status: 'Active', role: 'user_poc', action: 'Update'},
  //   {userid: '2', username: 'sagar', emailid: 'sage@mdo', status: 'Inactive', role: 'user_poc', action: 'Update'},
  //   {userid: '3', username: 'amit', emailid: 'amit@mdo', status: 'Active', role: 'user_poc', action: 'Update'}
  // ];

  // headElements = ['User Id', 'User Name', 'Email Id', 'Status', 'Role', 'Action'];
  //headElements = ['User Id', 'FirstName', 'Email Id', 'Status'];

  
  getUserList(id: number){
    this.router.navigate(['details', id]);
  }

}
