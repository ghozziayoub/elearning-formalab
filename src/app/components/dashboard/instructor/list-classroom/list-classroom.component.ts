import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/app/services/classroom.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-list-classroom',
  templateUrl: './list-classroom.component.html',
  styleUrls: ['./list-classroom.component.scss', './../../tableau-bord/tableau-bord.component.scss']
})
export class ListClassroomComponent implements OnInit {

  classroomsList = [];

  constructor(private cs: ClassroomService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    let id = decodedToken.idInstructor;

    this.cs.allClassroomIns(id).subscribe(
      res => this.classroomsList = res
    )
  }

}
