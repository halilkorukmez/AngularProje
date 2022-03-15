import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(   
    private authService: AuthService,
    private router: Router) {

  }
  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem("token");

    this.authService.logOut();
    this.router.navigateByUrl('/login')
  }

}
