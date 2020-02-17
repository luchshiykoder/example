import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ErrorComponent } from '../error/error.component';


const routes: Routes = [
  { path: 'addUser', component: AddUserComponent },
  { path: 'manageUser', component: ManageUserComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 


})
export class UserRoutingModule { }
