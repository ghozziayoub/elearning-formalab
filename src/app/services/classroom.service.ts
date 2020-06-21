import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private allClassroomsUrl = "http://localhost:3000/classroom/all";

  constructor(private http: HttpClient) { }

  allClassrooms() {
    return this.http.get<any>(this.allClassroomsUrl);
  }
}
