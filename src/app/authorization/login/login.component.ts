import { Component, OnInit } from '@angular/core';
import {LoginDto, LoginResult} from '../../models/models';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto: LoginDto = new LoginDto();
  loginResult: LoginResult = new LoginResult(false);

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginDto)
      .then(user => {
        this.router.navigate(['/home']);
      }, err => {
        this.updateLoginResult(false, err.message);
      });
  }

  register() {
    this.authService.register(this.loginDto)
      .then(user => {
        this.updateLoginResult(true, 'You can now log in');
      }, err => {
        this.updateLoginResult(false, err.message);
      });
  }

  private updateLoginResult(valid: boolean, message: string): void {
    this.loginResult.hasResult = true;
    this.loginResult.valid = valid;
    this.loginResult.message = message;
  }

}
