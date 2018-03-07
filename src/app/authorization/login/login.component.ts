import {Component, OnInit} from '@angular/core';
import {AuthenticationDto, AuthenticationResult} from '../../models/models';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticationDto: AuthenticationDto = new AuthenticationDto();
  authenticationResult: AuthenticationResult = new AuthenticationResult(false);

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.authenticationDto)
      .then(() => {
        this.router.navigate(['/home']);
      }, err => {
        this.updateLoginResult(false, err.message);
      });
  }

  register(): void {
    this.authService.register(this.authenticationDto)
      .then(user => {
        this.updateLoginResult(true, 'You can now log in');
      }, err => {
        this.updateLoginResult(false, err.message);
      });
  }

  private updateLoginResult(valid: boolean, message: string): void {
    this.authenticationResult.hasResult = true;
    this.authenticationResult.valid = valid;
    this.authenticationResult.message = message;
  }

}
