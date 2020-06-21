import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.scss','./../../tableau-bord/tableau-bord.component.scss']
})
export class DetailClassroomComponent implements OnInit {

  coursesList = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
