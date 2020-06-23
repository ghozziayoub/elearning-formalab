import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.scss', './../../tableau-bord/tableau-bord.component.scss']
})
export class DetailClassroomComponent implements OnInit {

  coursesList = [];
  idClassroom: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idClassroom = this.route.snapshot.paramMap.get('idClassroom');

  }

}
