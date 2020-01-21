import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { ToastrService }   from 'ngx-toastr';

@Component({
  selector:'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router, private toastr: ToastrService) {}
   model:any = {}
  ngOnInit() {
  }
  onclck(){
    console.log("in login");
    this.router.navigate(['./home']);
    console.log("after home");
  }
  /*login() {


    this.auth.login(this.credentials).subscribe(
      () => {

        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }*/
}
