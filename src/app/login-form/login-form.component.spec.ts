import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [FormsModule], // Add FormsModule for ngModel
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active to "login" onLoginTab', () => {
    component.onLoginTab();
    expect(component.active).toEqual('login');
  });

  it('should set active to "register" onRegisterTab', () => {
    component.onRegisterTab();
    expect(component.active).toEqual('register');
  });

  it('should emit onSubmitLoginEvent', () => {
    const login = 'testUser';
    const password = 'testPassword';
    spyOn(component.onSubmitLoginEvent, 'emit');
    component.login = login;
    component.password = password;
    component.onSubmitLogin();
    expect(component.onSubmitLoginEvent.emit).toHaveBeenCalledWith({ login, password });
  });

  it('should emit onSubmitRegisterEvent', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const login = 'newUser';
    const password = 'newPassword';
    spyOn(component.onSubmitRegisterEvent, 'emit');
    component.firstName = firstName;
    component.lastName = lastName;
    component.login = login;
    component.password = password;
    component.onSubmitRegister();
    expect(component.onSubmitRegisterEvent.emit).toHaveBeenCalledWith({
      firstName,
      lastName,
      login,
      password,
    });
  });
});
