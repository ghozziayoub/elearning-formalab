import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private allClassroomsUrl = "http://localhost:3000/classroom/all";
  private allClassroomsInsUrl = "http://localhost:3000/classroom/instructorClassrooms/";
  private addClassroomUrl = "http://localhost:3000/classroom/add";


  constructor(private http: HttpClient) { }

  allClassrooms() {
    return this.http.get<any>(this.allClassroomsUrl);
  }

  allClassroomIns(id){
    return this.http.get<any>(this.allClassroomsInsUrl+id);
  }

  addClassroom(classroom) {
    return this.http.post<any>(this.addClassroomUrl, classroom);
  }
}
