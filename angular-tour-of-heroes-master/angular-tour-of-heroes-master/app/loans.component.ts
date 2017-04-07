import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Loan } from './loan';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  public loans: Loan[];
  public selectedLoan: Loan;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
  this.loans = [];
    this.loans.push({
  id: 1,
  name: 'Arihant Towers',
  borrower: 'Mithileshwar',
  properties: '5',
  });
  this.loans.push({
  id: 2,
  name: 'Mantri Synergy',
  borrower: 'Venkataraman',
  properties: '5',
  });
  this.loans.push({
  id: 3,
  name: 'Green Peace',
  borrower: 'Ajan', 
  properties: '5',
  });
  console.log(this.loans);
  }

  onSelect(loan: Loan): void {
    this.selectedLoan = loan;
  }
}
