import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from '../shared/types';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input()
  image = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
