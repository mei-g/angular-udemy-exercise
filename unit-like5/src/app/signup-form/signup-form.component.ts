import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule, Validators } from '@angular/forms'
import { FormGroup, FormControl } from '@angular/forms'
import { UsernameValidators } from './username.validators';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form=new FormGroup({
      'username': new FormControl('', [Validators.required,
        Validators.minLength(3),
         UsernameValidators.cannotContianSpace], UsernameValidators.shouldBeUnique),

       oldPassword:new FormControl('', Validators.required, PasswordValidators.oldPassswordInvalid),

       newPassword:new FormControl('', Validators.compose([ Validators.required])),

       confPassword:new FormControl('', Validators.required)
  }, PasswordValidators.confPassswordShouldMatch)

  get oldPasswd(){
    //console.log("oldpasswd");
    return this.form.get('oldPassword');
  }  
  get newPasswd(){
    //console.log("newpasswd");

    return this.form.get('newPassword');
  } 
  get confPasswd(){
    return this.form.get('confPassword');
  }   
  get username(){
    return this.form.get('username');
  }
  
  login() {
    let isValid = false;
    if (!isValid) {
      this.form.setErrors({
        invalidLogin:true
      });
    }
  }  
}
