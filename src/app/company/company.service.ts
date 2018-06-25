import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(
    private http: HttpClient
  ) {
    console.log("Company Service instantiated")
    this.loadCompanies();
  }

  companies$ : BehaviorSubject<Company[]>
    = new BehaviorSubject<Company[]>([])

  loadCompanies(){
    this.http.get<Company[]>(`${this.API_BASE}/company`)
    .subscribe(companiesFromApi => {
      this.companies$.next(companiesFromApi);
    });
  }

  getCompanies(): Observable<Company[]> {
    // return this.http.get<Company[]>(`${this.API_BASE}/company`)
    //   .pipe(catchError(this.errorHandler));

    console.log("Just getting the state")
    return this.companies$;
  }

  deleteCompany(id: number){
    return this.http.delete<Company>(`${this.API_BASE}/company/${id}`)
    .subscribe(company => {
      this.loadCompanies();
    });
  }

  addCompany(company: Company){
    this.http.post<Company>(
      `${this.API_BASE}/company`, company, { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(this.errorHandler))
    .subscribe(company => {
      this.loadCompanies();
    });
  }

  updateCompany(company: Company){
    return this.http.put(
      `${this.API_BASE}/company/${company.id}`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(catchError(this.errorHandler))
    .subscribe(company => {
      this.loadCompanies();
    });
  }

  getCompany(companyId: number): Observable<Company> {
    return this.http.get(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Error): Observable<any> {
    console.error('this is a custom error handler');
    return new Observable();
  }

}
