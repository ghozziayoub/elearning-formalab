import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instructor } from '../models/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private registerInstructorUrl = "http://localhost:3000/instructor/register";

  constructor(private http: HttpClient) { }

  registerInstuctor(instrcutor:Instructor){
    let dataFromAPI = this.http.post<any>(this.registerInstructorUrl,instrcutor);
    return dataFromAPI;
  }


}
