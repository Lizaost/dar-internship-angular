import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from '../shared/types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLoginBtn = true;

  @Input()
  navItems: NavItem[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLoginClick(): void {
    this.router.navigate(['auth']);
    this.showLoginBtn = false;
  }

}
