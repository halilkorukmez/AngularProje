import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teachers } from '../Models/teacher';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://localhost:5001/api/Teacher/';
  constructor(private httpclient: HttpClient) { }
  getTeachers():Observable<Teachers[]> {
    let newPath = this.apiUrl + "GetList"
    return this.httpclient.get<Teachers[]>(newPath)
  }

  add(teachers:Teachers):Observable<Teachers>{
    return this.httpclient.post<Teachers>(this.apiUrl+"Add",teachers)
  }
}