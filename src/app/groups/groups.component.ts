import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/groups.module';
import { GroupeService } from '../shared/groups.service';
import { GroupUsers } from '../shared/groupUser.module';
import { ServiceUserGroups } from '../shared/groupUser.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[] = [];
  groupsToAdd: GroupUsers[] = [];
  color = "blue";

  constructor(private serviseGroupe: GroupeService, private adToGroupService: ServiceUserGroups){ }


  ngOnInit(){
    const group = this.serviseGroupe.getGroup();
    const newGroupMember = this.adToGroupService.getMembers();
    this.serviseGroupe.groupChange.subscribe((grup: Group[])=>{
      this.groups = grup;
    })
    this.adToGroupService.userGroupChange.subscribe((newMember:GroupUsers[])=>{
      this.groupsToAdd = newMember;
    })
  }

  choose(index: number){
    let div = document.getElementById(`${index}`);
    div!.style.background = this.color;
  }

  change(){
    this.color = 'white';
  }

}
