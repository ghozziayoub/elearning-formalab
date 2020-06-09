import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { Instructor } from 'src/app/models/instructor';
import { InstructorService } from 'src/app/services/instructor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-instructor',
  templateUrl: './register-instructor.component.html',
  styleUrls: ['./register-instructor.component.scss']
})
export class RegisterInstructorComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private is: InstructorService,
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
    let ins = new Instructor(data.firstname, data.lastname, data.email, data.phone);

    this.is.registerInstuctor(ins).subscribe(
      (res) => {
        this.toastr.success(res.message);
        this.router.navigate(['/login']);
      }
      ,
      (err) => {
        this.toastr.error(err.error.message);
      }
    )
  }


}
