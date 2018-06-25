import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from 'src/app/company/company';
import { CompanyService } from '../company.service';
import { Subscription, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
// THIS IS THE SMART COMPONENT

  companies$: Observable<Company[]>;

  constructor(
    private companyService: CompanyService
  ) {
  }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  deleteCompany(id: number){
    this.companyService.deleteCompany(id);
  }


}
