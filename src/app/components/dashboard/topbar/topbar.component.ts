import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss', './../tableau-bord/tableau-bord.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login-admin');
  }

}
