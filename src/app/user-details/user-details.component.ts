import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: User[] = [];
  user: User | undefined;
  idusr!: number ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.idusr = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getUsers().subscribe(value => {
      this.users = value;
      this.filterUserById(this.idusr);
    });
  }

  filterUserById(id: number | null): void {
    if (id) {
      this.user = this.users.find(user => user.id === id);
      if (this.user) {
        console.log('User Details:', this.user);
      } else {
        console.log('User not found');
      }
    } else {
      console.log('Invalid user ID');
    }
  }

}
