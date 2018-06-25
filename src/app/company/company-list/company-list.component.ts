import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company/company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor(
    private companyService: CompanyService
  ) {
  }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getCompanies()
      .subscribe(c => this.companies = c);
  }

}
