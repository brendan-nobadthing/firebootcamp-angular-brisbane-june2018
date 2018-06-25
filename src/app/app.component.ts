import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { OnInit } from '@angular/core';
import { CompanyService } from 'src/app/company/company.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Brisbane';
  companyCount$ : Observable<number>;

  constructor(private companyService: CompanyService){}

  ngOnInit(): void {
    this.companyCount$ = this.companyService.getCompanies()
    .pipe(map(c => c.length))
  }
}


