import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="router-link-active">Dashboard</a>
      <a routerLink="/borrowers" routerLinkActive="router-link-active">Borrowers</a>
      <a routerLink="/properties" routerLinkActive="router-link-active">Properties</a>
      <a routerLink="/loans" routerLinkActive="router-link-active">Loans</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loans Dashboard';
}
