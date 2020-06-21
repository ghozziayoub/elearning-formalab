import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', './../tableau-bord/tableau-bord.component.scss']
})
export class SidebarComponent implements OnInit {

  isAdmin: Boolean;
  isInstructor: Boolean;

  constructor(
    private is: InstructorService,
    private as: AdminService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.as.isLoggedIn();
    this.isInstructor = this.is.isLoggedIn();
  }


}
