import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:5001/api/Login/getToken';
  

  login(user: User):Observable<any> {
    return this.httpClient.post(this.apiUrl,user)
  }


  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('rolType');
    this.loggedIn = false;
  }

  isAuthenticated(){
    if(localStorage.getItem("token") && localStorage.getItem("rolType") == "1"){
      return true;
    }
    else{
      return false;
    }
  }
  isManagement(){
    if(localStorage.getItem("token") && localStorage.getItem("rolType") == "2" ){
      return true;
    }
    else{
      return false;
    }
  }
  isStudent(){
    if(localStorage.getItem("token") && localStorage.getItem("rolType") == "0"){
      return true;
    }
    else{
      return false;
    }
}}