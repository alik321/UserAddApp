import { EventEmitter } from "@angular/core";
import { Group } from "./groups.module";

export class GroupeService{

  groupChange = new EventEmitter<Group[]>();

  groups: Group[] = []

  getGroup(){
    return this.groups;
  }

  addGroup(group:Group){
    this.groups.push(group);
    this.groupChange.emit(this.groups);
  }
}