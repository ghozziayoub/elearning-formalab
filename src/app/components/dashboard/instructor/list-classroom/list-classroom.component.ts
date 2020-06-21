import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-list-classroom',
  templateUrl: './list-classroom.component.html',
  styleUrls: ['./list-classroom.component.scss', './../../tableau-bord/tableau-bord.component.scss']
})
export class ListClassroomComponent implements OnInit {

  classroomsList = [];

  constructor(private cs: ClassroomService) { }

  ngOnInit(): void {
    this.cs.allClassrooms().subscribe(
      res => this.classroomsList = res
    )
  }

}
