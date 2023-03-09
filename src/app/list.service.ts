import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IList } from './model/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private _url: string="http://localhost:5000/lists"
  constructor(private http:HttpClient) { }

     getUsers():Observable<IList[]>{
       return this.http.get<IList[]>(this._url)
       .pipe(catchError(this.errorHandler));
      }

   
       errorHandler(error:HttpErrorResponse){
      return throwError(error.message || "Sever Error" );
      }
}
