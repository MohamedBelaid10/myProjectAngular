import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: User;
  users: User[] = [];

  p: number = 1;
  searchText: any;
  username: any;
  term!: string;
  utilisateurForm!: FormGroup;
  
  totalLength: number = 0;
  constructor(
    private route: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.utilisateurForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
      address: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl(''),
      geo: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl(''),
      names: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl(''),
      company: new FormControl(''),
    });

    this.getUser();
  }

  saveUser() {
    if (this.utilisateurForm.valid) {
      const newUser: User = this.utilisateurForm.value;
      //this.users.push(newUser);
      this.userService.AddUser(newUser).subscribe();
      console.log('User added:', newUser);
      this.utilisateurForm.reset();
    } else {
      console.log('Invalid form');
    }
  }
  navigateToUserComponent(userDetails: any) {
    // Navigate to the user component and pass the user details as route parameters
    this.route.navigate(['/user', userDetails.id]);
  }

  Search() {
    if (this.username == '') {
      this.ngOnInit();
    } else {
      this.users.filter((res) => {
        return res.username
          .toLocaleLowerCase()
          .match(this.username.toLocaleLowerCase());
      });
    }
  }

  getUser() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }


  deleteUser(a: any) {
    
           if (confirm('Are you sure to delete ?'))
           this.userService.deleteUser(a.id).subscribe(
            res=>{
              alert("record deleted successfully");
              this.getUser();
            }
           )
        
          // Handle any error cases
        }
      
  }

