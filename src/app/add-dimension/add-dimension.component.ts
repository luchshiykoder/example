import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { of } from 'rxjs';


@Component({
  selector: 'app-add-dimension',
  templateUrl: './add-dimension.component.html',
  styleUrls: ['./add-dimension.component.css']
})
export class AddDimensionComponent implements OnInit {
  adddimensionvalue: FormGroup;
    submitted = false;
    selects = [];
 
    constructor(private formBuilder: FormBuilder) { }
 
    ngOnInit() {
        this.adddimensionvalue = this.formBuilder.group({

          AddDimension: ['', Validators.required],
          select: ['',  Validators.required]
        });
        // async orders
    of(this.getstatus()).subscribe(selects => {
       this.selects = selects;
     });
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
        if (this.adddimensionvalue.invalid) {
            return;
        }
        console.log(this.adddimensionvalue.value);
       //alert('SUCCESS!!');
    }
 
    
}
  
   
   
  
