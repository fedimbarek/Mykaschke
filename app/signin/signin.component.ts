import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public loginForm !: FormGroup;
  isFormInValid = false;
  areCredentialsInvalid = false;
  constructor(private FormBuilder : FormBuilder, private http : HttpClient , private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
email:[''],
password:['']
    })
  }
login(){
  if(!this.loginForm.valid){
    this.isFormInValid = true;
    this.areCredentialsInvalid = true;}
this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
 const user = res.find((a:any)=>{
  return a.email == this.loginForm.value.email && a.password === this.loginForm.value.password
 });
 if(user){
  alert("login Success");
  this.loginForm.reset();
  this.router.navigate(['Magasin'])
 }else {
  alert("user not found");
 }
})
}
}
