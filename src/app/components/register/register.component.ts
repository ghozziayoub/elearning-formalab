import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us:UserService,
    private router:Router,
    private toastr: ToastrService
    ) {

    let registerFormInputs = {
      firstname: new FormControl("", [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;@$^%{}?]{1,20}$')
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;@$^%{}?]{1,20}$')
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[2-9][0-9]*'),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
      ])
    }

    this.registerForm = fb.group(registerFormInputs);

  }

  get myfirstname() { return this.registerForm.get('firstname'); }
  get mylastname() { return this.registerForm.get('lastname'); }
  get myphone() { return this.registerForm.get('phone'); }
  get myemail() { return this.registerForm.get('email'); }
  get mypassword() { return this.registerForm.get('password'); }
  get myconfirmPassword() { return this.registerForm.get('confirmPassword'); }

  ngOnInit(): void {
  }

  register() {
    let data = this.registerForm.value;

    let user = new User(
      data.firstname,
      data.lastname,
      data.email,
      data.phone,
      data.password,
    );

    this.us.registerUser(user).subscribe(
      (res)=>{
        this.toastr.success(res.message);
        this.router.navigate(['/login']);
        console.log(res.message);
      },
      (err)=>{
        this.toastr.error(err.error.message);
        console.log(err.error.message);
      }
    )


  }

}
