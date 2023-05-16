
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

  public getUsers() {

    let myData = this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");

    return myData ;
  }
 

}
