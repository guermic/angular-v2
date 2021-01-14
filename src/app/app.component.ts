import { Component } from '@angular/core';
import {SessionService} from './core/services/session.service';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  signout() {

    this._snackBar.open('Vous avez été déconnecté avec succès', 'Fermer', {
      duration: 2000,
    });

    // supprimer les données de sessions et retourner à la page de login
    this.router.navigate(['/auth/landing-page']).then(() => {
      this.sessionService.clear();
      AuthService.user = null;
    });
  }

}
