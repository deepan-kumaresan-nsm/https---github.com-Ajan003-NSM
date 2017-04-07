import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Borrower } from './borrower';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.css']
})
export class BorrowersComponent implements OnInit {
  public borrowers: Borrower[];
  public selectedBorrower: Borrower;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
  this.borrowers = [];
    this.borrowers.push({
  id: 1,
  name: 'Mithileshwar',
  loans: '2',
  properties: '5',
  });
  this.borrowers.push({
  id: 2,
  name: 'Venkataraman',
  loans: '2',
  properties: '5',
  });
  this.borrowers.push({
  id: 3,
  name: 'Ajan',
  loans: '2',
  properties: '5',
  });
  console.log(this.borrowers);
  }

  onSelect(borrower: Borrower): void {
    this.selectedBorrower = borrower;
  }
}
