import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
pswd=""
acno=""
uname=""


// group creation
registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
  acno:['',[Validators.required,Validators.pattern("[0-9]*")]],
  pswd:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]]
})

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
  // var uname=this.uname
  // var acno=this.acno
  // var pswd=this.pswd


//  use reactive  forms
if(this.registerForm.valid){
  var uname=this.registerForm.value.uname
  var acno=this.registerForm.value.acno
  var pswd=this.registerForm.value.pswd

  let result=this.ds.register(acno,pswd,uname)
  
  if(result){
    alert("Account created successfully")
    console.log(this.ds)
    
    this.router.navigateByUrl("")
  }
  else{
    alert("Account already exist")
  }
}else{
  alert("invalid form..")
}
  
}
}
