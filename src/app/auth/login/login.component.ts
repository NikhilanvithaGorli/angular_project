import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user : any=[];
  public errorMsg:any;
  usersArray: any;
  constructor (private _userService: UserService, private router:Router){
  }


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

  public currentUser: any;
  login( email:any,password:any){
    
    let data={
     "email":email,"password":password
    }
    console.log(this.usersArray.users.length)
    var flag=0;
    for(let i=0; i<this.usersArray.users.length; i++){
      if(((this.usersArray.users[i].email)==data.email) && ((this.usersArray.users[i].password)==data.password)){
        console.log("already registered")
        this.currentUser=data.email;
        
        
          flag=1;
          this.router.navigate(['/home', this.currentUser]);
      };     
  }
  if(flag==0){
    console.log("Incorrect userName or password");
  }
   
  }

  getUser(){
    this._userService.getUsers()
    .subscribe(data=>this.user=data,
   error=>this.errorMsg=error);
  }
}
