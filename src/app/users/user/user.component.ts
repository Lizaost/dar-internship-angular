import {Component, Input, OnInit} from '@angular/core';
import {NavItem, User} from '../../shared/types';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private usersService: UsersService){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.id){
        this.usersService.getUser(params.id)
          .subscribe(data => {
            console.log(data);
            this.user = data;
          });
      }
    });
    this.route.params
      .pipe(
        mergeMap(param => this.usersService.getUsers())
      )
  }

}
