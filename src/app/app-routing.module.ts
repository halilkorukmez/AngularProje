import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { ExamComponent } from './Components/exam/exam.component';
import { LoginComponent } from './Components/login/login.component';
import { StudentsComponent } from './Components/students/students.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { LoginGuard } from './Guards/login.guards';
import { ManagementGuard } from './Guards/management.guards';


const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login',component: LoginComponent },
  
  {
    path: 'students',
    component: StudentsComponent,
    canActivate: [LoginGuard],
    children: [ ]
  },
  {
    path: 'teachers',
    component: TeachersComponent,   
    canActivate: [LoginGuard],
    children: [
  
 
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,   
    canActivate: [ManagementGuard],
    children: [
  
 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }