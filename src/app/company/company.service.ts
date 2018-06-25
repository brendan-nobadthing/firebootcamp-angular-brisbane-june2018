import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  deleteCompany(id: number){
    return this.http.delete<Company>(`${this.API_BASE}/company/${id}`)
  }

  errorHandler(error: Error): Observable<any> {
    console.error('this is a custom error handler');
    return new Observable();
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(
      `${this.API_BASE}/company`, company, { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(this.errorHandler));
  }

  updateCompany(company: Company): Observable<Company> {
    return this.http.put(
      `${this.API_BASE}/company/${company.id}`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(this.errorHandler));
  }

  getCompany(companyId: number): Observable<Company> {
    return this.http.get(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.errorHandler));
  }

}
