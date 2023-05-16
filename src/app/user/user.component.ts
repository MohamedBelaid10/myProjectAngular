import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   users : User[]= [] ;
   searchText : any ;
   username : any ;
   term!: string;
  constructor(
    private route : Router ,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


  navigateToUserComponent(userDetails: any) {
    // Navigate to the user component and pass the user details as route parameters
    this.route.navigate(['/user', userDetails.id]);
  }

  Search() {
        if(this.username == ""){
          this.ngOnInit();
        }else{
          this.users.filter(res =>{
            return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
          })
        }
  }

  getUser() {

    this.userService.getUsers().subscribe(
      users => {
        this.users = users ;
       
      }



    )
    
  }
}
