import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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