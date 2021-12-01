import { EventEmitter } from "@angular/core";
import { User } from "./users.module";

export class ServiseUsers{

  userChange = new EventEmitter<User[]>();

  users: User[] = [];

  getUsers(){
    return this.users.slice()
  }

  addUser(user: User){
    this.users.push(user);
    this.userChange.emit(this.users)
  }
}
