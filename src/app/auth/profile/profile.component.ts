import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor (private _userService: UserService,private route:ActivatedRoute){
   
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

        this.route.paramMap.subscribe((params:ParamMap)=>{
          let id=(params.get('user'));
          this.currentUser=id;
        })
  }
  //@Input('currentUser') title: string|undefined;
  public user : any=[];
  public errorMsg:any;
  public currentUser:any;
  
  usersArray: any;
  public email:any
  public fname:any;
  public lname:any;
  public phone:any;
  public id:any;

  getEmp(){
    for(let i=0; i<this.usersArray.users.length; i++){
      if((this.usersArray.users[i].email)==this.currentUser ){
       // console.log("hii registered"+this.usersArray.users[i].email+this.usersArray.users[i].fname);
        this.email=this.usersArray.users[i].email;
        this.id=this.usersArray.users[i].id;
        this.fname=this.usersArray.users[i].fname;
        this.lname=this.usersArray.users[i].lname;
        this.phone=this.usersArray.users[i].phone;
      }; 
    }
  }


    


}
