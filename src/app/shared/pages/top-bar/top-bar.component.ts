import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IAuthRepository } from 'src/app/core/domain/repository/IAuth.repository';
import { IStorageRepository } from 'src/app/core/domain/repository/IStorage.repository';

@Component({
  selector: 'top-bar-component',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  fullName: string = '';
  userData: IUserData = this.storageService.getValue("USER_DATA");

  constructor(
    @Inject('storageRepository') private storageService: IStorageRepository,
    @Inject('authRepository') private authService: IAuthRepository,
    private router: Router) { }

  ngOnInit(): void {
    this.fullName = `${this.userData.firstName} ${this.userData.lastName}`;
  }

  logout() {
    this.authService.CloseSession();
    this.router.navigate(['/']);
  }

}
