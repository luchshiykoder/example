import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AsidemenuComponent } from './asidemenu/asidemenu.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddPOCComponent } from './add-poc/add-poc.component';
import { PocListComponent } from './poc-list/poc-list.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MapPOCSurveyComponent } from './map-pocsurvey/map-pocsurvey.component';
import { AddDimensionComponent } from './add-dimension/add-dimension.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { AddWelcomeMessageComponent } from './add-welcome-message/add-welcome-message.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SurveyListComponent } from './survey-list/survey-list.component';


// welcome 
const routes: Routes = [
  { path: '', component: LoginComponent,
    data: { showMenu: false, showAside: false}
  },
  { path: 'login', component: LoginComponent,
    data: { showMenu: false, showAside: false}  
  },

  { path: 'welcome/:name', component: WelcomeComponent,
    data: { showMenu: true, showAside: true }  
  },
  { path: 'todos', component: ListTodosComponent},
  { path: 'logout', component: LogoutComponent,
    data: { showMenu: false, showAside: false}  
  },

  { path: 'user', loadChildren: './user/user.module#UserModule'},


  { path: 'todos/:id', component: TodoComponent },
  { path: 'asidemenu', component: AsidemenuComponent },

  { path: 'addcompany', component: AddCompanyComponent },
  { path: 'addpoc', component: AddPOCComponent},
  { path: 'pocList', component: PocListComponent},
  { path: 'demographics', component: DemographicsComponent },
  { path: 'filemanager', component: FileManagerComponent},
  { path: 'mappocsurvey', component: MapPOCSurveyComponent},
  { path: 'adddimension', component: AddDimensionComponent},
  { path: 'addsurvey', component: AddSurveyComponent},
  { path: 'addwelcomemessage', component: AddWelcomeMessageComponent},
  { path: 'addquestion', component: AddQuestionComponent},
  { path: 'surveylist', component: SurveyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
