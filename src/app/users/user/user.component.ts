import {Component, Input, OnInit} from '@angular/core';
import {NavItem, User} from '../../shared/types';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe(({user}) => {
        this.user = user;
      });
  }

}
