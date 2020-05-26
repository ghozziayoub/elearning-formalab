import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private registerUserUrl = "http://localhost:3000/user/register";

  constructor(private http:HttpClient) { }

  registerUser(user:User){
    let dataFromAPI = this.http.post<any>(this.registerUserUrl,user);
    return dataFromAPI;
  }

}
