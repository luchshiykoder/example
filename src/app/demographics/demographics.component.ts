import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { of } from 'rxjs';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {
  SelectCompanyform: FormGroup;
  submitted = false;
  SelectCompanys = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SelectCompanyform = this.formBuilder.group({

      SelectCompany: ['', Validators.required],
      
    });

  // async orders
  of(this.getCompany()).subscribe(SelectCompanys => {
     this.SelectCompanys = SelectCompanys;
   });
  
 }
 getCompany() {
   return [
     { id: '1', name: 'HCL' },
     { id: '2', name: 'ARMEZO' },
     { id: '3', name: 'SBI' },
     { id: '4', name: 'TATA' }
   ];
 }


  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.SelectCompanyform.invalid) {
        return;
    }
    console.log(this.SelectCompanyform.value);
    //alert('SUCCESS!!');
  }

}