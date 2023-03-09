import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string="http://localhost:3000/users"
  constructor(private http:HttpClient) { }

     postUsers(data:any):Observable<IUser[]>{
      return this.http.post<IUser[]>(this._url,data)
        .pipe(catchError(this.errorHandler));
      }
     getUsers():Observable<IUser[]>{
       return this.http.get<IUser[]>(this._url)
       .pipe(catchError(this.errorHandler));
      }

      // getUser(data:any):Observable<IUser[]>{
      //   return this.http.get<IUser[]>(this._url)
      //   .pipe(catchError(this.errorHandler));
      //  }

 
    //   putEmployee(id:any,data:any):Observable<IUser[]>{
    //      let putUrl =`${this._url}/${id}`;
    //       return this.http.put<IUser[]>(putUrl,data)
    //   .pipe(catchError(this.errorHandler));
    //  }
    //  deleteEmployee(id:any):Observable<IUser[]>{
    //   let deleteUrl =`${this._url}/${id}`;
    //    return this.http.delete<IUser[]>(deleteUrl)
    //  .pipe(catchError(this.errorHandler));
  // }
       errorHandler(error:HttpErrorResponse){
      return throwError(error.message || "Sever Error" );
      }
}
