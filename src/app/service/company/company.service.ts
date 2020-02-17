import { API_URL } from './../../app.constants';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CompanyModel} from '../../model/company-model';
import { AddCompanyComponent } from '../../add-company/add-company.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
readonly url = 'http://localhost:8084/';  
  public listCompany: CompanyModel[];
  
  constructor(private http:HttpClient) { }

  headers={
     headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  retrieveAllCompany() : Observable<any> {  
    console.log("Execute retrieveAllCompany Services ");
    return this.http.get(`${API_URL}/company/comapnyList/`);
  }

  CompanyList()  {  
  this.http.get(this.url+'/company/comapnyList/').toPromise().
  then(result=>this.listCompany = result as CompanyModel[]) 
  } 

  deleteAddUserComponent(username, id){
    return this.http.delete(`${API_URL}/company/${username}/company/${id}`);
  }

  retrieveAddUserComponent(username, id){
    return this.http.get<AddCompanyComponent>(`${API_URL}/company/${id}`);
  }

  updateAddUserComponent(username, id, AddUserComponent){
    return this.http.put(`${API_URL}/company/${username}/company/${id}`, AddUserComponent);
  }

  createCompany(company: any): Observable<any> {
    console.log("Execute User Service")
    return this.http.post<CompanyModel>(`${API_URL}/company/addCompany/`,company,this.headers);
  }

}
