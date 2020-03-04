import { API_URL } from './../../app.constants';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {PocModelInterface} from '../../model/PocModel';

@Injectable({
  providedIn: 'root'
})
export class PocService {

  constructor(private http:HttpClient) { }
  headers={
    headers: new HttpHeaders({
       'Content-Type': 'application/json'
   })
}

retrieveAllUser() : Observable<any> {  
  console.log("Execute retrieveAllUser Poc Service");
  return this.http.get(`${API_URL}/poc/pocList/`);
   
}
  createPoc(PocModelInterface: any): Observable<any> {
    console.log("CreatePoc Service Called ")
    return this.http.post<PocModelInterface>(`${API_URL}/poc/addPoc/`,PocModelInterface,this.headers);
  }
}
