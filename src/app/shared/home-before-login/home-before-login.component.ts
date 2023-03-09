import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-home-before-login',
  templateUrl: './home-before-login.component.html',
  styleUrls: ['./home-before-login.component.css']
})
export class HomeBeforeLoginComponent {

  
public list : any=[];
public errorMsg:any;
  constructor(private router:Router, private _listService:ListService){
    this.getUser();}
    
getUser(){
  this._listService.getUsers()
  .subscribe(data=>this.list=data,
 error=>this.errorMsg=error);
}
}
