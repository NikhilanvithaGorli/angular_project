import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  cUser:any;
  constructor(private route:ActivatedRoute,private router:Router, private _listService:ListService,private _cartService:CartService){}

  ngOnInit(){
    // let id=(this.route.snapshot.paramMap.get('id'));
    // this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=(params.get('user'));
      this.cUser=id;
      this.getUser();
  })
}


public list : any=[];
public errorMsg:any;

getUser(){
  this._listService.getUsers()
  .subscribe(data=>this.list=data,
 error=>this.errorMsg=error);
}

onSelect(d:any){
console.log(d, this.cUser);
alert("item added to cart");
let data={user:this.cUser, nid : d.id, name : d.name, img: d.img,
  price : d.price}
  console.log(data);
  this._cartService.postCart(data).subscribe((response)=>{
    this.getUser();
    });
    }

    OnCart(){
      this.router.navigate(['/cart',this.cUser])
    }
    OnProfile(){
      this.router.navigate(['/profile',this.cUser])
    }
  }

