import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fnameFormControl = new FormControl('', [Validators.required]);
  public signup !: FormGroup
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      fname:[''],
      lname:[''],
      email:[''],
      tel:[''],
      password:['']     
    })
  }
  signupdata(){
    this.http.post<any>("http://localhost:3000/signup",this.signup.value)
    .subscribe(res=>{
     alert("Signup Successfull");
     this.signup.reset();
     this.router.navigate(['signin']);
    })
  }










}
