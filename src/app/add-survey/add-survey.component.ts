import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { of } from 'rxjs';
import {IDropdownSettings  } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  addsurveyform: FormGroup;
  submitted = false;
  selects = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings={};
  
  constructor(private formBuilder: FormBuilder) { }
 
    ngOnInit() {
      
        this.addsurveyform = this.formBuilder.group({         
          SurveyName: ['', Validators.required],
          select: ['',  Validators.required]
        });

      // async orders
      of(this.getstatus()).subscribe(selects => {
       this.selects = selects;
      });
      this.dropdownList = [
        { item_id: 1, item_text: 'Engagement' },
        { item_id: 2, item_text: 'Oppotunity for growth & Development' },
        { item_id: 3, item_text: 'Rewards & Recognition' },
        { item_id: 4, item_text: 'Relationship with my Reporting Manager' },
        { item_id: 5, item_text: 'Testing' },
        { item_id: 6, item_text: 'Work Environment' },
        { item_id: 7, item_text: 'Senior Management' },
        { item_id: 8, item_text: 'Suggestion & Feedback' },
        { item_id: 9, item_text: 'Extra Dimension' }
      ];
      
      
  
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
     
       
  
    }
    // onItemSelect(item: any) {
    //   console.log(item);
    // }
    // onSelectAll(items: any) {
    //   console.log(items);
    // }
    getstatus() {
      return [
        { id: '1', name: 'Active' },
        { id: '2', name: 'Inactive' }
      ];
    }
  
 
    onSubmit() {
        this.submitted = true;
 
        // stop the process here if form is invalid
        if (this.addsurveyform.invalid) {
            return;
        }
        console.log(this.addsurveyform.value);
       //alert('SUCCESS!!');
    }
 
    
}
  
   