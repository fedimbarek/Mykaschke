import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signninData';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInValid = false;
  areCredentialsInvalid = false;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm : NgForm){
    if(!signInForm.valid){
      this.isFormInValid = true;
      this.areCredentialsInvalid = true;
return;
    }
    this.checkCredentials(signInForm);
  }
  private checkCredentials(signInForm : NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    if(this.authenticationService.authenticate(signInData)){
      this.isFormInValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
