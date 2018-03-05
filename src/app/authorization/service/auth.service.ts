import {Injectable} from '@angular/core';
import {LoginDto} from '../../models/models';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from 'firebase/app';

@Injectable()
export class AuthService {

  user: User;

  constructor(private angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(loginDto: LoginDto): Promise<any> {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(loginDto.email, loginDto.password);
  }

  register(loginDto: LoginDto) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(loginDto.email, loginDto.password);
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

}
