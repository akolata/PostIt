import {Injectable} from '@angular/core';
import {AuthenticationDto} from '../../models/models';
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

  test() {
    this.angularFireAuth.auth.fetchProvidersForEmail("olek.tbg@poczta.onet.pl").then(data => {
      console.log(data);
    });
  }

  login(loginDto: AuthenticationDto): Promise<any> {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(loginDto.email, loginDto.password);
  }

  register(loginDto: AuthenticationDto) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(loginDto.email, loginDto.password);
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

}
