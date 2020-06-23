import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ClassroomService } from 'src/app/services/classroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss', './../../tableau-bord/tableau-bord.component.scss']
})
export class AddClassroomComponent implements OnInit {

  addClassroomForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cs: ClassroomService,
    private router: Router
  ) {

    let formControls = {
      name: new FormControl()
    }

    this.addClassroomForm = fb.group(formControls);
  }

  ngOnInit(): void {
  }

  addClassroom() {
    let data = this.addClassroomForm.value;

    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    let id = decodedToken.idInstructor;

    let obj = {
      idInstructor: id,
      name: data.name
    }

    this.cs.addClassroom(obj).subscribe(
      res => this.router.navigateByUrl('/instructor/list-classroom')
    )



  }

}
