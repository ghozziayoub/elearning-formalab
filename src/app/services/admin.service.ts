import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private statUrl = "http://localhost:3000/testChartJsData";

  constructor(private http: HttpClient) { }

  getStat() {
    return this.http.get<any>(this.statUrl);
  }

}
