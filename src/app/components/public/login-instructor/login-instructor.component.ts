import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-login-instructor',
  templateUrl: './login-instructor.component.html',
  styleUrls: ['./login-instructor.component.scss']
})
export class LoginInstructorComponent implements OnInit {


  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private is: InstructorService,
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
    if (this.is.isLoggedIn()) {
      this.router.navigate(['/dashboard'])
    }
  }

  login() {
    let data = this.loginForm.value;

    this.is.loginInstructor(data).subscribe(
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
