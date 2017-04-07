import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Property } from './property';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  public properties: Property[];
  public selectedProperty: Property;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
  this.properties = [];
    this.properties.push({
  id: 1,
  name: 'Arihant Towers',
  borrower: 'Mithileshwar',
  loans: '5',
  });
  this.properties.push({
  id: 2,
  name: 'Mantra Synergy',
  borrower: 'Venkataraman',
  loans: '5',
  });
  this.properties.push({
  id: 3,
  name: 'Green Peace',
  borrower: 'Ajan', 
  loans: '5',
  });
  console.log(this.properties);
  }

  onSelect(property: Property): void {
    this.selectedProperty = property;
  }
}
