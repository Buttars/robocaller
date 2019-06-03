import { Component, OnInit } from '@angular/core';

import { AuthService } from '@robocaller/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  signIn = () => {
    this.authService.googleSignIn();
  };

  signOut = () => {
    this.authService.signOut();
  };
}
