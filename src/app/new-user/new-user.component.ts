import { Component, ElementRef, ViewChild} from '@angular/core';
import { User } from '../shared/users.module';
import { ServiseUsers } from '../shared/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  activeValue = '';

  @ViewChild('name') nameValue!: ElementRef;
  @ViewChild('email') emailValue!: ElementRef;
  @ViewChild('selectValue') selectValue!: ElementRef;

  users: User[] = [];

  constructor(private usersServise: ServiseUsers){}
  
  getSelect(){
    const name = this.nameValue.nativeElement.value;
    const email = this.emailValue.nativeElement.value;
    const select = this.selectValue.nativeElement.value;
    const user = new User(name, email, this.activeValue, select);

    this.usersServise.addUser(user);
    this.toClear()

  }

  toClear(){
    const name = this.nameValue.nativeElement.value = '';
    const email = this.emailValue.nativeElement.value = '';
    const select = this.selectValue.nativeElement.value = '';
    this.activeValue = '';
  }
}
