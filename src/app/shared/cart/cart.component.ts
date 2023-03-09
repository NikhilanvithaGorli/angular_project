import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _cartService:CartService, private route:ActivatedRoute ){
   
  }
    
  
  public cart : any=[];
  public errorMsg:any;
public cUser:any;
public img:any=[];
public name:any=[];
public price:any=[];
public amount:number=0;
clicked = false;
// public num=1;

usersArray: any;
  ngOnInit(){

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=(params.get('user'));
      this.cUser=id;
  })
  fetch('./assets/cart.json').then(res => res.json())
  .then(jsonData => {
    this.usersArray = jsonData;
    console.log(this.usersArray);
  });
  this._cartService.getUsers()
    .subscribe(data => this.cart=data,
      error=>this.errorMsg=error);

  
}

  getUser(){

    this._cartService.getUsers()
    .subscribe(data=>this.cart=data,
  error=>this.errorMsg=error);
  }

  getEmp(){
    for(let i=0; i<this.usersArray.carts.length; i++){
      if((this.usersArray.carts[i].user)==this.cUser ){
        console.log("hii registered"+this.usersArray.carts[i].email+this.usersArray.carts[i].name);
        this.img[i]=this.usersArray.carts[i].img;
        var a=(this.usersArray.carts[i].price);
        this.amount+=(a);
        this.name[i]=this.usersArray.carts[i].name;
        this.price[i]=this.usersArray.carts[i].price;
        
      }; 
    }
   
  }



  

  // goPrevious(num:any){
    
  //    this.num=num-1;
  //   }
  //   goNext(num:any){
  //     this.num=parseInt(num)+1;
  //  }

}
