import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { getApiPath } from '@shared/utils/api.utils';
import { AuthEndpointsEnum } from '@shared/endpoints/auth.endpoints';
import { take } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private _http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this._http
      .post(getApiPath(AuthEndpointsEnum.Signin), {
        email,
        password,
      })
      .pipe(take(1));
  }
}
