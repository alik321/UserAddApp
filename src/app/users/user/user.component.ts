import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/shared/users.module';
import { ServiseUsers } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit{

  user: User[] = [];

  constructor(private serviseUsers:ServiseUsers){}

  ngOnInit(){
    const users = this.serviseUsers.getUsers();
    this.serviseUsers.userChange.subscribe((user: User[])=>{
      this.user = user;
    })
  }
}
