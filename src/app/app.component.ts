import { Component } from '@angular/core';
import { ServiseUsers } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiseUsers]
})
export class AppComponent {
  title = 'user-add';
}
