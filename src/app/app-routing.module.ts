import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/public/contact/contact.component';
import { HomeComponent } from './components/public/home/home.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { AboutComponent } from './components/public/about/about.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { RegisterInstructorComponent } from './components/public/register-instructor/register-instructor.component';
import { TestComponent } from './components/test/test.component';
import { TableauBordComponent } from './components/dashboard/tableau-bord/tableau-bord.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginAdminComponent } from './components/public/login-admin/login-admin.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginInstructorComponent } from './components/public/login-instructor/login-instructor.component';
import { ListInstructorsComponent } from './components/dashboard/admin/list-instructors/list-instructors.component';
import { InstructorGuard } from './guards/instructor.guard';
import { AuthGuard } from './guards/auth.guard';
import { ListClassroomComponent } from './components/dashboard/instructor/list-classroom/list-classroom.component';
import { DetailClassroomComponent } from './components/dashboard/instructor/detail-classroom/detail-classroom.component';
import { AddCourseComponent } from './components/dashboard/instructor/add-course/add-course.component';
import { AddClassroomComponent } from './components/dashboard/instructor/add-classroom/add-classroom.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "register-instructor",
    component: RegisterInstructorComponent
  },
  {
    path: "dashboard",
    component: TableauBordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login-admin",
    component: LoginAdminComponent
  },
  {
    path: "login-instructor",
    component: LoginInstructorComponent
  },
  //ADMIN
  {
    path: "admin",
    children: [
      {
        path: "list-instructors",
        component: ListInstructorsComponent,
        canActivate: [AdminGuard]
      }
    ]
  },
  //INSTRUCTOR
  {
    path: "instructor",
    children: [
      {
        path: "list-classroom",
        component: ListClassroomComponent,
        canActivate: [InstructorGuard]
      },
      {
        path: "add-classroom",
        component: AddClassroomComponent,
        canActivate: [InstructorGuard]
      },
      {
        path: "detail-classroom/:idClassroom",
        component: DetailClassroomComponent,
        canActivate: [InstructorGuard]
      },
      {
        path: "add-course",
        component: AddCourseComponent,
        canActivate: [InstructorGuard]
      }
    ]
  },
  {
    path: "test",
    component: TestComponent
  },
  //PAGE 404
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
