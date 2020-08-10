import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from '../shared/types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent{
  title = 'dar-internship';
  navItems: NavItem[] = [
    {
      title: 'Users',
      enabled: true,
      url: '/users'
    },
    {
      title: 'Videos',
      enabled: false,
      url: '/videos'
    },
    {
      title: 'Rooms',
      enabled: true,
      url: '/rooms'
    }
  ];

  sidenavItems: NavItem[] = [
    {
      title: 'Sidenav item 1',
      enabled: true,
      url: '/item1'
    },
    {
      title: 'Sidenav item 2',
      enabled: false,
      url: '/item2'
    },
    {
      title: 'Sidenav item 3',
      enabled: true,
      url: '/item3'
    },
    {
      title: 'Let the force be with you',
      enabled: true,
      url: '/the-force'
    },
    {
      title: 'The cake is lie',
      enabled: false,
      url: '/the-portal'
    },
    {
      title: 'Live long and prosper',
      enabled: true,
      url: '/star-track'
    },
    {
      title: 'This is the way',
      enabled: true,
      url: '/the-mandalorian'
    }
  ];
}

