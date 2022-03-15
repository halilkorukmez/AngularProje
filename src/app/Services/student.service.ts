import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://localhost:5001/api/Student/';
  constructor(private httpclient: HttpClient) { }
  getStudents():Observable<Students[]> {
    let newPath = this.apiUrl + "GetList"
    return this.httpclient.get<Students[]>(newPath)
  }

  add(students:Students):Observable<Students>{
    return this.httpclient.post<Students>(this.apiUrl+"Add",students)
  }
}