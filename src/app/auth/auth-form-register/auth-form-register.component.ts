import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-form-register',
  templateUrl: './auth-form-register.component.html',
  styleUrls: ['./auth-form-register.component.scss']
})
export class AuthFormRegisterComponent implements OnInit {

  login = ''
  password = ''
  s_password = ''

  constructor() {
    // this.item = new HTMLInputElement();
  }

  ngOnInit(): void {
  }

}
