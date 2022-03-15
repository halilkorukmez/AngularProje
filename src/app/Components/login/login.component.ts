import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {

  }

  ngOnInit(): void {
    this.createLoginForm();

  }
 
  form: FormGroup;
  createLoginForm() {
    this.form = this.fb.group({
      eMail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loggedIn() {
    if (localStorage.getItem("token") && localStorage.getItem("rolType") == "0") {
      return this.router.navigate(["admin"])
    }
    
    else if ((localStorage.getItem("token") && localStorage.getItem("rolType") == "1")) {
      return this.router.navigate(["teachers"])
    }
    else if ((localStorage.getItem("token") && localStorage.getItem("rolType") == "2")) {
      return this.router.navigate(["students"])}

  }


  login() {
    if (this.form.valid) {
      let loginModel = Object.assign({}, this.form.value)

      this.authService.login(loginModel).subscribe(response => {
        console.log(response)
        if (response.Status == true) {
        
          localStorage.setItem("token", response.Token)
          localStorage.setItem("rolType", response.RolType)
          localStorage.setItem("userId", response.UserId)
      
          console.log(response)
          if (response.RolType == 1)
            this.router.navigateByUrl('/teachers')
            else if (response.RolType == 0)
            this.router.navigateByUrl('/admin')
          else if (response.RolType == 2)
            this.router.navigateByUrl('/students')
        }
        else {
       
        }
      }, responseError => {

      })
    }
  }


}