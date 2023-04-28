import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './user.service';
import { DocumentEndpointsEnum } from '@shared/endpoints/document.endpoints';
import { getApiPath, setRequestParams } from '@shared/utils/api.utils';
import {
  DocumentItem,
  DocumentParams,
  DocumentResponse,
} from '@interfaces/document.interface';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  #headers = new HttpHeaders({
    Authorization: `Bearer ${this._userService.getAccessToken()}`,
  });

  constructor(private _http: HttpClient, private _userService: UserService) {}

  getDocuments(options?: DocumentParams): Observable<DocumentItem[]> {
    const params = setRequestParams(options);

    return this._http
      .get<DocumentResponse>(getApiPath(DocumentEndpointsEnum.AllDocuments), {
        headers: this.#headers,
        params,
      })
      .pipe(map((documents: DocumentResponse) => documents.data));
  }
}
