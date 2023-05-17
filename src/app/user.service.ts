
import {HttpClient} from "@angular/common/http" ;
import { Injectable } from '@angular/core';
import { User } from "./model/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  myData : any
  constructor( private http: HttpClient) { }

  baseUrl = "http://localhost:3000/todos";

  public getUsers() {

    let myData = this.http.get<User[]>(this.baseUrl);

    return myData ;
  }

  AddUser(u:any): Observable<any>{
    return this.http.post<any>(this.baseUrl,u);
  }
  
  deleteUser(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
