import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginInput = '';
  passwordInput = '';

  constructor(){
  }

  ngOnInit(): void {}

  logLoginAndPassword(): void {
    console.log(`Login: ${this.loginInput}\nPassword: ${this.passwordInput}`);
  }
}
