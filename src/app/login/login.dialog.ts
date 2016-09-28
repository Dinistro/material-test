import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.html'
})
export class LoginDialog {
  constructor(
    private http: Http,
    public dialogRef: MdDialogRef<LoginDialog>
  ) {
    //console.log(this.dialogRef.close);
  }

  user: User = new User();

  go() {

    console.log('TODO > DB', this.user);

    this.http.post('/graphql', {
      query: `mutation {
        add (username: "${this.user.username}") {
          username
          id
        }
      }`
    }).subscribe(
      result => {
        console.log(result.json().data.add);
        this.dialogRef.close(this.user);
      }
    );

  }
}

class User {
  username: String;
  gender: String;
}
