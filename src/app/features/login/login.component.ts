import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { finalize } from 'rxjs/operators';

import { UserService } from '@services/user.service';
import { User } from '@interfaces/user.interface';
import { SessionStorageEnum } from '@shared/enums/session-storage.enum';
import { Title } from '@angular/platform-browser';
import { environment } from '@env/environment';
import { LoginService } from './services/login.service';

@Component({
  selector: 'tk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent {
  loginForm: FormGroup = this._fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  isLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
    private _title: Title,
    private _userService: UserService
  ) {
    this._title.setTitle(`${environment.baseTabTitle} - Login`);
  }

  onSubmit(): void {
    if (!this.loginForm.valid) return;

    this.isLoading = true;

    const { email, password } = this.loginForm.value;
    this._loginService
      .login(email, password)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        (user: User) => {
          sessionStorage.setItem(
            SessionStorageEnum.TraktoAccessToken,
            user.access_token
          );

          this._userService.setUser(user);
          this._router.navigate(['category']);
        },
        (error: any) => {
          this.loginForm.reset();

          if (error.status === 401) {
            alert('E-mail ou senha incorreto(a).');
          }
        }
      );
  }
}
