import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { AsidemenuComponent } from './asidemenu/asidemenu.component';
import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddPOCComponent } from './add-poc/add-poc.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MapPOCSurveyComponent } from './map-pocsurvey/map-pocsurvey.component';
import { AddDimensionComponent } from './add-dimension/add-dimension.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { AddWelcomeMessageComponent } from './add-welcome-message/add-welcome-message.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SurveyListComponent } from './survey-list/survey-list.component';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    AsidemenuComponent,
    AddCompanyComponent,
    AddPOCComponent,
    DemographicsComponent,
    FileManagerComponent,
    MapPOCSurveyComponent,
    AddDimensionComponent,
    AddSurveyComponent,
    AddWelcomeMessageComponent,
    AddQuestionComponent,
    SurveyListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),   
    HttpClientModule,UserRoutingModule,UserModule,ReactiveFormsModule,
    AngularEditorModule
    
  ],
  providers: [
     {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
