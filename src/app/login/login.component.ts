import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "perfect banking partner"
  accno = "account number please"

  acno = ""
  pswd = ""


  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern("[0-9]*")]],
    pswd: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]
  })

  // dependency injection
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // acnoChange(event: any) {
  //   this.acno = event.target.value
  //   console.log(this.acno);

  // }
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  //   console.log(this.pswd);

  // }

  login() {

    var acno = this.loginForm.value.acno
    var password = this.loginForm.value.pswd
    if (this.loginForm.valid) {

// let database = this.ds.users

      // if (acno in database) {
      //   if (password == database[acno]["pswd"]) {
      //     alert("login successfull")
      //     this.router.navigateByUrl('dashboard')
      //   }
      //   else {
      //     alert("incorrect password")
      //   }
      // }
      // else {
      //   alert("invalid account number")
      // }
     
      let result = this.ds.login(acno, password)

      if (result) {
        alert("login successfull")
        this.router.navigateByUrl('dashboard')
      }

    } else {
      alert("invalid form")
    }

  }


  // template reference variable
  // login(acno:any,pswd:any) {
  //   var acno = acno.value
  //   var password = pswd.value

  //   let database = this.users

  //   if (acno in database) {
  //     if (password == database[acno]["pswd"]) {
  //       alert("login successfull")
  //     }
  //     else {
  //       alert("incorrect password")
  //     }
  //   }
  //   else {
  //     alert("invalid account number")
  //   }
  // }
}
 