import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { AboutComponent } from './components/public/about/about.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { HeaderComponent } from './components/public/header/header.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { RegisterInstructorComponent } from './components/public/register-instructor/register-instructor.component';
import { TestComponent } from './components/test/test.component';
import { TableauBordComponent } from './components/dashboard/tableau-bord/tableau-bord.component';
import { Page404Component } from './components/page404/page404.component';
import { ChartsModule } from 'ng2-charts';
import { LoginAdminComponent } from './components/public/login-admin/login-admin.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { TopbarComponent } from './components/dashboard/topbar/topbar.component';
import { LoginInstructorComponent } from './components/public/login-instructor/login-instructor.component';
import { ListInstructorsComponent } from './components/dashboard/admin/list-instructors/list-instructors.component';
import { ListClassroomComponent } from './components/dashboard/instructor/list-classroom/list-classroom.component';
import { DetailClassroomComponent } from './components/dashboard/instructor/detail-classroom/detail-classroom.component';
import { AddCourseComponent } from './components/dashboard/instructor/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RegisterInstructorComponent,
    TestComponent,
    TableauBordComponent,
    Page404Component,
    LoginAdminComponent,
    SidebarComponent,
    TopbarComponent,
    LoginInstructorComponent,
    ListInstructorsComponent,
    ListClassroomComponent,
    DetailClassroomComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule , 
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule no longer required
    ToastNoAnimationModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
