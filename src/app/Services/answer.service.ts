import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answers } from '../Models/answer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://localhost:5001/api/Exam/';
  constructor(private httpclient: HttpClient) { }
  getAnswers():Observable<Answers[]> {
    let newPath = this.apiUrl + "GetList"
    return this.httpclient.get<Answers[]>(newPath)
  }

  add(answers:Answers):Observable<Answers>{
    return this.httpclient.post<Answers>(this.apiUrl+"Add",answers)
  }
}