import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
// @auth0/angular-jwt
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private statUrl = "http://localhost:3000/testChartJsData";
  private loginAdminUrl = "http://localhost:3000/admin/login";

  constructor(private http: HttpClient) { }

  loginAdmin(admin) {
    return this.http.post<any>(this.loginAdminUrl, admin);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      
      if (decodedToken.role == "admin") {
        return true;
      } else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  getStat() {
    return this.http.get<any>(this.statUrl);
  }

}
