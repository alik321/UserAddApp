import { Component, OnInit} from '@angular/core';
import { GroupUsers } from 'src/app/shared/groupUser.module';
import { ServiceUserGroups } from 'src/app/shared/groupUser.service';
import { User } from 'src/app/shared/users.module';
import { ServiseUsers } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit{

  user: User[] = [];

  userToGroup: GroupUsers[] = [];

  constructor(private serviseUsers:ServiseUsers, private addToGroupService: ServiceUserGroups){}

  ngOnInit(){
    const users = this.serviseUsers.getUsers();
    this.serviseUsers.userChange.subscribe((user: User[])=>{
      this.user = user;
    })
  }

  addToUserGroup(index:number){
    const newMember = new GroupUsers(this.user[index].name);
    this.addToGroupService.addToGroup(newMember);
  }
}
