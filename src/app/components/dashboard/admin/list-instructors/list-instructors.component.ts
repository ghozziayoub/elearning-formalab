import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-list-instructors',
  templateUrl: './list-instructors.component.html',
  styleUrls: ['./list-instructors.component.scss', './../../tableau-bord/tableau-bord.component.scss']
})
export class ListInstructorsComponent implements OnInit {

  instructorsList = [];

  constructor(private is: InstructorService) { }

  ngOnInit(): void {
    this.is.allInstructors().subscribe(
      res => this.instructorsList = res
    )
  }

  update(id) {
    this.is.updateAccount(id).subscribe(
      res => this.ngOnInit()
    )
  }



}
