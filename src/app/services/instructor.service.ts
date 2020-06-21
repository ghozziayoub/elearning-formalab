import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instructor } from '../models/instructor';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private registerInstructorUrl = "http://localhost:3000/instructor/register";
  private loginInstructorUrl = "http://localhost:3000/instructor/login";
  private allInstructorsUrl = "http://localhost:3000/instructor/all";
  private updateAccountInstructorsUrl = "http://localhost:3000/instructor/updateAccountState/";

  constructor(private http: HttpClient) { }

  loginInstructor(instructor) {
    return this.http.post<any>(this.loginInstructorUrl, instructor);
  }

  registerInstuctor(instrcutor: Instructor) {
    let dataFromAPI = this.http.post<any>(this.registerInstructorUrl, instrcutor);
    return dataFromAPI;
  }

  updateAccount(id) {
    return this.http.patch<any>(this.updateAccountInstructorsUrl + id, null);
  }

  allInstructors() {
    return this.http.get<any>(this.allInstructorsUrl);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      if (decodedToken.role == "instructor") {
        return true;
      } else {
        return false;
      }

    }
    else {
      return false;
    }
  }


}
