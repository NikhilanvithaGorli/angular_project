import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ICart } from './model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _url: string="http://localhost:4000/carts"
  constructor(private http:HttpClient) { }

     getUsers():Observable<ICart[]>{
       return this.http.get<ICart[]>(this._url)
       .pipe(catchError(this.errorHandler));
      }

      postCart(data:any):Observable<ICart[]>{
        return this.http.post<ICart[]>(this._url,data)
          .pipe(catchError(this.errorHandler));
        }
   
       errorHandler(error:HttpErrorResponse){
      return throwError(error.message || "Sever Error" );
      }
}
