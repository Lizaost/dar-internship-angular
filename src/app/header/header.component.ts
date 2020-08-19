import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from '../shared/types';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';
import {withIdentifier} from 'codelyzer/util/astQuery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLoginBtn = true;
  isLoggedIn = false;

  @Input()
  navItems: NavItem[] = [];

  constructor(private router: Router,
              private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.isLoggedIn$
      .subscribe(val => this.isLoggedIn = val);
  }

}
