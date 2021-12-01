import { EventEmitter } from "@angular/core";
import { GroupUsers } from "./groupUser.module";

export class ServiceUserGroups{

  userGroupChange = new EventEmitter<GroupUsers[]>();

  groupUsers: GroupUsers[]= [];

  addToGroup(user: GroupUsers){
    this.groupUsers.push(user);
    this.userGroupChange.emit(this.groupUsers);
  }

  getMembers(){
    return this.groupUsers;
  }
}