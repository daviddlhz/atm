import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { storageKey } from 'src/app/core/domain/enum/storageKey.enum';

import { IUserAuth } from 'src/app/core/domain/interfaces/IUserAuth';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IAuthRepository } from 'src/app/core/domain/repository/IAuth.repository';
import { IStorageRepository } from 'src/app/core/domain/repository/IStorage.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject('authRepository') private authService: IAuthRepository,
    @Inject('storageRepository') private StorageService: IStorageRepository,
    private router: Router ) { }
    
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.authForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }  

  login() {
    //implementar inicializacion en otra parte
    const userData: IUserAuth = this.authForm.value ;
    const userLogged: IUserData | undefined = this.authService.Authenticate(userData);

    if (userLogged) {
      this.StorageService.save(storageKey.USER_DATA, userLogged);
      this.router.navigate(['/dashboard']);
    }
  }
}
