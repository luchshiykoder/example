import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import{CompanyModel} from '../model/company-model'
import{CompanyService} from '../service/company/company.service'
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  addcompanyform: FormGroup;
    submitted = false;
    selects = [];  
    logo: String;    
    message:any;
    showMsg: boolean = false;
    
    comp: CompanyModel = new CompanyModel("","");

    constructor(
      private formBuilder: FormBuilder,
      private CompanyService: CompanyService,
      private router: Router
      ) 
    { }

    editorConfig: AngularEditorConfig = {
      editable: true,
        spellcheck: true,
        height: 'auto',
        minHeight: '0',
        maxHeight: 'auto',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
        placeholder: 'Enter text here...',
        defaultParagraphSeparator: '',
        defaultFontName: '',
        defaultFontSize: '',
        fonts: [
          {class: 'arial', name: 'Arial'},
          {class: 'times-new-roman', name: 'Times New Roman'},
          {class: 'calibri', name: 'Calibri'},
          {class: 'comic-sans-ms', name: 'Comic Sans MS'}
        ],
        customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'v1/image',
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [
        ['bold', 'italic'],
        ['fontSize']
      ]
  };
 
    ngOnInit() {
        this.addcompanyform = this.formBuilder.group({
          CompanyName: ['', Validators.required],
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
    onChange(event) {     
      for (var i = 0; i < event.target.files.length; i++) { 
        var name = event.target.files[i].name;
        var type = event.target.files[i].type;
        var size = event.target.files[i].size;
        var modifiedDate = event.target.files[i].lastModifiedDate;
        
        // console.log ('Name: ' + name + "\n" + 
        //   'Type: ' + type + "\n" +
        //   'Last-Modified-Date: ' + modifiedDate + "\n" +
        //   'Size: ' + Math.round(size / 1024) + " KB");
      }
      let file = event.target.files[0];
      this.logo = file.name;
      this.comp.logo=file.name;   
      console.log('fileName '+this.logo+' compLogo'+this.comp.logo);

    }
    onSubmit() {
       this.submitted = true;
      this.save();   

    }
    save() {
      if(this.addcompanyform.valid) {          
           console.log(' Company Create');
           console.log('companyName : ' + this.comp.companyName);
           console.log('LOGO : ' + this.comp.logo);
   
   
        this.CompanyService.createCompany(this.comp)
         .subscribe(
          data =>{
           // this.router.navigate(['list-user']);
            this.showMsg= true;
          } , 
          error => console.log(error));

          console.log(this.addcompanyform.value);         
          this.addcompanyform.reset();
          alert("Company Added Sucessfully..");
         
        
    }
  }
    
}
