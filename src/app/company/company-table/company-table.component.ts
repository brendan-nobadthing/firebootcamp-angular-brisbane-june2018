import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Company } from 'src/app/company/company';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {
// THIS IS THE DUMB-PRESENTATIONAL COMPONENT

  @Input()
  companies$ : Observable<Company[]>;

  @Output()
  companyDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteCompany(id: number){
    this.companyDeleted.emit(id);
  }

}
