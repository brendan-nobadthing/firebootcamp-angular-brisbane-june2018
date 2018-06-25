import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get<Company[]>(`${this.API_BASE}/xxcompany`);
  }


}
