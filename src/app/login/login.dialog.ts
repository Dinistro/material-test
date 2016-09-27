import { Component } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.html'
})
export class LoginDialog {
  constructor(public dialogRef: MdDialogRef<LoginDialog>) {
    //console.log(this.dialogRef.close);
  }

  user: User = new User();

  go() {
    console.log('TODO > DB', this.user);

    this.dialogRef.close(this.user);
  }
}

class User {
  username: String;
  gender: String;
}
