import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://localhost:5001/api/Question/';
  constructor(private httpclient: HttpClient) { }
  getQuestions():Observable<Questions[]> {
    let newPath = this.apiUrl + "GetList"
    return this.httpclient.get<Questions[]>(newPath)
  }

  add(question:Questions):Observable<Questions>{
    return this.httpclient.post<Questions>(this.apiUrl+"Add",question)
  }
}