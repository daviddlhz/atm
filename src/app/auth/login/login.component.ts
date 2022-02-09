import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUserAuth } from 'src/app/core/domain/interfaces/IUserAuth';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IAuthRepository } from 'src/app/core/domain/repository/IAuth.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  constructor(@Inject('authRepository') private authService: IAuthRepository, private router: Router) { }

  login() {
    //implementar inicializacion en otra parte
    const userData: IUserAuth = {
      username: this.userName,
      password: this.password,
    };

    const userLogged: IUserData | undefined = this.authService.Authenticate(userData);

    if (userLogged) {
      console.log(userLogged)
      this.router.navigate(['/dashboard']);
    }
  }
}
