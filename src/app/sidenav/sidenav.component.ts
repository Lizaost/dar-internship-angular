import {Component, Input} from '@angular/core';
import {NavItem} from '../shared/types';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input()
  navItems: NavItem[] = [];

  constructor() {
  }

}
