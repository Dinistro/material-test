import { Component } from '@angular/core';

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.html'
})
export class LoginDialog {
  user: User = new User();

  close() {
    console.log('TODO');
  }
}

class User {
  username: String;
}
