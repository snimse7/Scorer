import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { User, signInResponse } from 'src/Model/models';
import { KingScorerServiceService } from 'src/app/Services/king-scorer-service.service';

@Component({
  selector: 'app-signup-signin-page',
  templateUrl: './signup-signin-page.component.html',
  styleUrls: ['./signup-signin-page.component.css']
})
export class SignupSigninPageComponent {

  constructor(private fb: FormBuilder,private _kingScorerService:KingScorerServiceService){

  }
  
  loginPage=true;
  ngOnInit() {
    this.profileForm = this.fb.group({
      username: ['', Validators.required,],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });

  
  }

  usr=false;
  isUserpresent(user:any){
    let userName=user.target.value;
    let isUserpresent=false;
    this._kingScorerService.checkUserPresent(userName).subscribe(
      (data) => {
        this.usr=data;
      },
      (error) => {
        window.alert("Something Went wrong");
      }
    );

  }
  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : {'mismatch': true};
  }

  onSubmit() {
    if (this.profileForm.valid && this.usr) {
      console.log(this.profileForm.value);
    }
  }
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  
  signIn = new FormGroup({
    userName: new FormControl('', Validators.required),
    passWord: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  

  onSub(){

  }


  homePage=false;
  user?:User;
  userSignIn(){
    let username: string = this.signIn.get('userName')?.value || '';
    let passWord:string=this.signIn.get('passWord')?.value|| '';
    let signInResponse:signInResponse;
    this._kingScorerService.signInUser(username,passWord).subscribe(
      (data) => {
        signInResponse=data;
        if(data.isValidCredentidals==true){
            this.homePage=true;
            this.user=data.user;
            this.loginPage=false
            alert(data.message);
        }
        else{
          alert(data.message);
        }
      },
      (error) => {
        window.alert("Something Went wrong");
      }
    );
  }


  signUpUser(){
    let user=new User;
    user.userName=this.profileForm.get('username')?.value || '';
    user.password=this.profileForm.get('password')?.value|| '';
    user.email=this.profileForm.get('email')?.value ||'';
    

    this._kingScorerService.signUpUser(user).subscribe(
      (data) => {
        
        if(data.success==true){
            alert(data.message);
        }
        else{
          alert(data.message);
        }
      },
      (error) => {
        window.alert("Something Went wrong");
      }
    );
  }

}
