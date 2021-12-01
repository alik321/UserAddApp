import { Component } from '@angular/core';
import { GroupeService } from './shared/groups.service';
import { ServiceUserGroups } from './shared/groupUser.service';
import { ServiseUsers } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiseUsers,GroupeService,ServiceUserGroups]
})
export class AppComponent {
  title = 'user-add';
}
