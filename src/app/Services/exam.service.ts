import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exams } from '../Models/exam';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://localhost:5001/api/Exam/';
  constructor(private httpclient: HttpClient) { }
  getExams():Observable<Exams[]> {
    let newPath = this.apiUrl + "GetList"
    return this.httpclient.get<Exams[]>(newPath)
  }

  add(exams:Exams):Observable<Exams>{
    return this.httpclient.post<Exams>(this.apiUrl+"Add",exams)
  }
}