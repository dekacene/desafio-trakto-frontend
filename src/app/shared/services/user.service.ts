import { Injectable } from '@angular/core';

import { User } from '@interfaces/user.interface';
import { SessionStorageEnum } from '@shared/enums/session-storage.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #user: User;

  setUser(user: any): void {
    this.#user = user;
  }

  getUser(): User {
    return this.#user;
  }

  getAccessToken(): string {
    return (
      this.#user?.access_token ??
      sessionStorage.getItem(SessionStorageEnum.TraktoAccessToken)
    );
  }
}
