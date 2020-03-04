import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { of,Observable } from 'rxjs';
import{CompanyModel} from '../model/company-model'
import{PocModel} from '../model/poc-model'
import{PocModelInterface} from '../model/PocModel'
import{CompanyService} from '../service/company/company.service'
import {PocService} from '../service/poc/poc.service'

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
    status :any;
  
    comp: CompanyModel= new CompanyModel("","");
   
    //poc: PocModel = new PocModel("", "", "", "");   
    poc :PocModelInterface={
      accesskey:"pass",
      firstName:"",
      lastName:"",
      mail:"",
      status:"",
      companyEntity:{
        companyId:0,
        companyName:"",
        logo:""
      }
    }


    constructor(
      private formBuilder: FormBuilder,
      private companyService:CompanyService, 
      private pocService:PocService, 
      private router:Router
      ) { }

    ngOnInit() {
        this.getCompanyList;  
        this.addpocform = this.formBuilder.group({
        firstName: ['',Validators.required],
        lastName: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]],
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
 
  dataChanged(filterVal: any) {
    if (filterVal == "0") {
      console.log('data : '+filterVal);
    }     
    else{
      this.poc.companyEntity.companyId=filterVal.target.value;
          
    }       
 }
  getCompanyList() 
  {
    console.log("getCompanyList : "+JSON.stringify(this.comp));
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
      console.log(this.poc); 
      console.log("JSON DATA "+JSON.stringify(this.poc));   
     
      // stop the process here if form is invalid
      if (this.addpocform.invalid) {
          return;
      }else{

        this.pocService.createPoc(this.poc)
      .subscribe(
        data =>{console.log(data);
         },
        error => console.log(error));
     // this.message = `User Created Successful!`;
        this.gotoList();
    }     
       }
       gotoList() {
        this.router.navigate(['/pocList']);
      }
     
    }

    


