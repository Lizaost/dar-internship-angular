import {Component, Input, OnInit} from '@angular/core';
import {NavItem, User} from '../../shared/types';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  searchInput = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.users$ = this.usersService.getUsers()
      .pipe(
        map(users => this.searchInput ? users.filter(user => user.name.includes(this.searchInput)) : users)
      );
  }

  navigateToUser(id: number): void {
    this.router.navigate(['/users', id]);
  }

  searchChange(event): void {
    console.log(event);
    this.getData();
  }

  search(): void {
    console.log(this.searchInput);
    this.getData();
  }

  searchClear(): void {
    this.searchInput = '';
    this.getData();
  }

}
