import { API_URL } from './../../app.constants';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../../user/add-user/add-user.component';
import { Employee } from '../../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  
  retrieveAllUser() : Observable<any> {  
    console.log("Execute retrieveAllUser User Service");
    return this.http.get(`${API_URL}/users/get/`);
     
  }

  deleteUserById(username, id){
    return this.http.delete(`${API_URL}/users/${username}/AddUserComponents/${id}`);
  }

  retrieveUserById(username, id){
    return this.http.get<AddUserComponent>(`${API_URL}/users/AddUserComponents/${id}`);
  }

  updateUser(username, id, AddUserComponent){
    return this.http.put(`${API_URL}/users/${username}/AddUserComponents/${id}`, AddUserComponent);
  }

  createUser(employee: any): Observable<any> {
    console.log("Execute User Service")
    return this.http.post<Employee>(`${API_URL}/users/addUser/`,employee,this.headers);
  }


}
