import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.scss']
})
export class TableauBordComponent implements OnInit {

  constructor(private as: AdminService, private router: Router) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  ngOnInit(): void {
    this.as.getStat().subscribe(
      res => {
        this.barChartLabels = res.years;
        this.barChartData = res.data;
      }
    )
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login-admin');
  }

}
