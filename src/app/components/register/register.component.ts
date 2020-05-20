import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {

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
    console.log(data);
  }

}
