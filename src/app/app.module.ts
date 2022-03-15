import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Components/students/students.component';
import { ExamComponent } from './Components/exam/exam.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Interceptors/AuthInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { AdminComponent } from './Components/admin/admin.component';
import { TeacherSettingComponent } from './Components/admin/teacher-setting/teacher-setting.component';
import { StudentSettingComponent } from './Components/admin/student-setting/student-setting.component';
import { LessonSettingComponent } from './Components/admin/lesson-setting/lesson-setting.component';
import { ExamSettingComponent } from './Components/teachers/exam-setting/exam-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeachersComponent,
    StudentsComponent,
    ExamComponent,
    AdminComponent,
    TeacherSettingComponent,
    StudentSettingComponent,
    LessonSettingComponent,
    ExamSettingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
