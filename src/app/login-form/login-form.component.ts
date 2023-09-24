import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active = 'login';
  firstName: string = '';
  lastName: string = '';
  login: string = '';
  password: string = '';

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({
      login: this.login, password: this.password
    })
  }

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      firstName: this.firstName, lastName: this.lastName,
      login: this.login, password: this.password
    })
  }

  onLoginTab() {
    this.active = 'login';
  }

  onRegisterTab() {
    this.active = 'register';
  }
}
