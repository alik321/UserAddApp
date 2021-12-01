import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/shared/groups.module';
import { GroupeService } from 'src/app/shared/groups.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  name = '';

  constructor(private groupeService: GroupeService) { }

  ngOnInit(): void {}

  addGroup(){
    const group = new Group(this.name);
    this.groupeService.addGroup(group);
    this.name = '';
  };

}
