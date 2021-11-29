import { Component} from '@angular/core';
import { User } from 'src/app/shared/users.module';
import { ServiseUsers } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent{

  constructor(public ServiseUsers:ServiseUsers){}

}
