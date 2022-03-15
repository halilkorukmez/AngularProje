import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lessons } from '../Models/lesson';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://localhost:5001/api/Lesson/';
  constructor(private httpclient: HttpClient) { }
  getLessons():Observable<Lessons[]> {
    let newPath = this.apiUrl + "GetList"
    return this.httpclient.get<Lessons[]>(newPath)
  }

  add(lessons:Lessons):Observable<Lessons>{
    return this.httpclient.post<Lessons>(this.apiUrl+"Add",lessons)
  }
}