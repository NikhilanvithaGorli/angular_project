import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  public user : any=[];
  public errorMsg:any;
   constructor (private _userService: UserService){}

  usersArray: any;
 


  ngOnInit(){
    fetch('./assets/user.json').then(res => res.json())
    .then(jsonData => {
      this.usersArray = jsonData;
      console.log(this.usersArray);
    });
    this._userService.getUsers()
      .subscribe(data => this.user=data,
        error=>this.errorMsg=error);
        
  }
  
  // deleteUser(email:any){
  //   let data={
  //     "email":email
  //   }
  //   this._userService.deleteUser(data.email).subscribe((response)=>{
  //     this.getUser();
  //   console.log(data.email);
      
  //   });
  // }


  getUser(){
    this._userService.getUsers()
    .subscribe(data=>this.user=data,
   error=>this.errorMsg=error);
  }
    postEmp(  fname : any, lname : any, email : any, phone : any, password : any){
      let data={  fname : fname, lname : lname, email : email, phone : phone,password : password }
      
    console.log(this.usersArray.users.length)
    var flag=0;
    for(let i=0; i<this.usersArray.users.length; i++){
      if(((this.usersArray.users[i].email)==data.email)){
        console.log("already registered")
        
        
        
          flag=1;
          break;
          };     
      }
      if(flag==0){
      this._userService.postUsers(data).subscribe((response)=>{
        this.getEmp();
        });
        }
      }
      
  getEmp(){
  this._userService.getUsers()
    .subscribe(data=>this.user=data,
    error=>this.errorMsg=error);
  }

  // form: FormGroup;
  // public user : any=[];
  // public errorMsg:any;
  // reg = new Register();
  // public Twowa : any;
  // constructor(
  //   private formBuilder: FormBuilder,

  //   // private authSVC: UserService,
  //   // private route: Router
  // ) {
  //   this.form = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]],
  //     fname: ['', [Validators.required]],
  //     lname: ['', [Validators.required]],
  //     ph: ['', [Validators.required]],
  //   });
  // }

  // get Email() {
   
  //   return this.form.get('email');
    
  // }

  // get Password() {
  //   return this.form.get('password');
  // }

  
  //   register( ){
  //     let data={ fname : this.form.get('fname'),lname : this.form.get('lname'), email :this.Email,  phone : this.form.get('ph'), password : this.form.get('fname')}
   
      
  //     console.log(data);
  //     this.authSVC.postUsers(data).subscribe((response)=>{
  //       this.getUser();
  //       });
  //       }

        
  // getUser(){
  //   this.authSVC.getUsers()
  //   .subscribe(data=>this.user=data,
  //  error=>this.errorMsg=error);
  // }
}
