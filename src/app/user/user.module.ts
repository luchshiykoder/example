import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ AddUserComponent } from './add-user/add-user.component';
import{ ManageUserComponent } from './manage-user/manage-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddUserComponent,ManageUserComponent ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  providers:[]
})
export class UserModule { }
