import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthStatus } from 'src/app/core/domain/enum/status.enum';
import { IUserAuth } from 'src/app/core/domain/interfaces/IUserAuth';
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

    const userData: IUserAuth = {
     
      username: this.userName,
      password: this.password
    
    };

    if (this.authService.Authentication(userData) == AuthStatus.SUCESS) {
      
      this.router.navigate(['/dashboard'])
    
    }
  }
}
