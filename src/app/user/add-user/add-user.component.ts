import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service'
import {Employee} from '../../model/Employee'
import { type } from 'os';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  adduserForm: FormGroup;
  submitted = false;
  message: string;
  Statuse: any;
  userProfiles: Array<object> = [];
  userProfiles1: Array<object> = [];
  
  user: Employee={
    firstName:"",
    lastName:"",
    email:"",
    confirmPassword:"",
    password:"",
    status:"",
    userRolesEntity:{
     userRolesId:100,
      type:"",
      status:""
    }

};


  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.adduserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Status: ['', Validators.required],
      userProfiles:['',Validators.required],
      Password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    // async orders
    of(this.getstatus()).subscribe(Status => {
      this.Statuse = Status;
    });

     // async orders
     of(this.user_Profile()).subscribe(userProfiles => {
      this.userProfiles = userProfiles;
    }); 

  }
    getstatus() {
    return [
      { id: '1', name: 'Active' },
      { id: '2', name: 'Inactive' }
    ];
  }

  user_Profile() {
    return [
      { id: '1', name: 'Admin' },
      { id: '2', name: 'Root' }
      
    ];
  }


  
  dataChanged(filterVal: any) {
    if (filterVal == "0") {
      console.log('profiles '+filterVal);
    }     
    else{
      this.userProfiles1=filterVal.target.value;
      this.user.userRolesEntity.type=filterVal.target.value;
      this.user.userRolesEntity.status="active"

    }       
 }

  onSubmit() {
    this.submitted = true;    
 
    console.log(this.adduserForm.value); 

    console.log(this.user); 
   
    if (this.adduserForm.invalid) {
      return;
   
    }else if (this.adduserForm.valid) {   
    

      
      this.UserService.createUser(this.user)
      .subscribe(
        data =>{console.log(data);
         },
        error => console.log(error));
     // this.message = `User Created Successful!`;
    //  this.gotoList();
    }     
  } 
  gotoList() {
    this.router.navigate(['/user/manageUser']);
  }
}