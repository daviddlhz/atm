import { Component, Inject, OnInit } from '@angular/core';
import { AuthStatus } from 'src/app/core/domain/enum/status.enum';
import { IUserAuth } from 'src/app/core/domain/interfaces/IUserAuth';
import { IAuthRepository } from 'src/app/core/domain/repository/IAuth.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  userData: IUserAuth = {username: this.userName, password: this.password}

  constructor(@Inject('authRepository') private authService: IAuthRepository) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.authService.Authentication(this.userData));
  }



}
