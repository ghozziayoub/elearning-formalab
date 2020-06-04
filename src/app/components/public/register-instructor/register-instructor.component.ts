import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-instructor',
  templateUrl: './register-instructor.component.html',
  styleUrls: ['./register-instructor.component.scss']
})
export class RegisterInstructorComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
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
      ])
    }

    this.registerForm = fb.group(registerFormInputs);

  }

  get myfirstname() { return this.registerForm.get('firstname'); }
  get mylastname() { return this.registerForm.get('lastname'); }
  get myphone() { return this.registerForm.get('phone'); }
  get myemail() { return this.registerForm.get('email'); }

  ngOnInit(): void {
  }

  register() {
    let data = this.registerForm.value;

    console.log(data);
    

  }


}
