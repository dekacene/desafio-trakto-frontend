import { HttpParams } from '@angular/common/http';

import { environment } from '@env/environment';
import { DocumentParams } from '@interfaces/document.interface';

export function getApiPath(endpoint: string): string {
  return `${environment.apiUrl}/${endpoint}`;
}

export function setRequestParams(options: DocumentParams): HttpParams {
  let params = new HttpParams();

  if (options) {
    for (const [key, value] of Object.entries(options)) {
      params = params.append(key, value);
    }
  }

  return params;
}
