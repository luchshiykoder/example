import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { of,Observable } from 'rxjs';
import{CompanyModel} from '../model/company-model'
import{PocModel} from '../model/poc-model'
import{CompanyService} from '../service/company/company.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-poc',
  templateUrl: './add-poc.component.html',
  styleUrls: ['./add-poc.component.css']
})
export class AddPOCComponent implements OnInit {
    addpocform: FormGroup;
    submitted = false;
    company:any = [];    
    companyData:any
    status =[];
   
    comp: CompanyModel= new CompanyModel("","","");
    poc: PocModel = new PocModel("", "", "", "");
    constructor(
      private formBuilder: FormBuilder,
      private companyService:CompanyService, 
      privaterouter:Router
      ) { }

    ngOnInit() {
        this.getCompanyList;  
        this.addpocform = this.formBuilder.group({
        firstName: ['',Validators.required],
        lastName: ['', Validators.required],
        pocEmail: ['', [Validators.required, Validators.email]],
        company: ['',  Validators.required],
        status: ['',  Validators.required]
      });       
    
    of(this.getstatus()).subscribe(status => {
      this.status = status;
    });  
    of(this.getCompanyList()).subscribe(company =>{    
      this.company=company;
    });  
  }
 
  getCompanyList() 
  {
    console.log("getCompanyList");
    this.companyService.retrieveAllCompany().subscribe(
      data => {
        this.company=data; 
        console.log(this.company);
       },
      err => console.error(err), 
      () => console.log('getCompanyList retrived') 
      );
 }

   getstatus() {
    return [
      { id: '1', name: 'Active' },
      { id: '2', name: 'Inactive' }
    ];
  }
 

    onSubmit() {
      this.submitted = true;

      // stop the process here if form is invalid
      if (this.addpocform.invalid) {
          return;
      }
      console.log(this.addpocform.value);
      //alert('SUCCESS!!');
    }

}
