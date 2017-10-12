import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/Auth';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).
      then(_ => this.router.navigate([`/dashboard`])).
      catch(error => console.log(`Unable to login`, error));
  }
  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigate([`/dashboard`]);
  }

}
