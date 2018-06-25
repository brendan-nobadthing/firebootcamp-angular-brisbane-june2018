import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(
    private http: HttpClient
  ) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.API_BASE}/company`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Error): Observable<any> {
    console.error('this is a custom error handler');
    return new Observable();
  }


}
