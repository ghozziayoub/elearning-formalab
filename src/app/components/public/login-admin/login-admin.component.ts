import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private as: AdminService,
    private router: Router) {

    let loginFormInputs = {
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = fb.group(loginFormInputs);

  }

  get myemail() { return this.loginForm.get('email'); }
  get mypassword() { return this.loginForm.get('password'); }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard'])
    }
  }

  login() {
    let data = this.loginForm.value;

    this.as.loginAdmin(data).subscribe(
      res => {
        let token = res.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard'])
      },
      err => {
        console.log(err);
      }
    )
  }


}