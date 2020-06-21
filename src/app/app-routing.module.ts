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
    canActivate: [AdminGuard]
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
        component: ListInstructorsComponent
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
