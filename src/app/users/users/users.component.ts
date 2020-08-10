import {Component, Input, OnInit} from '@angular/core';
import {NavItem, User} from '../../shared/types';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
  }

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError((err) => {
          console.log('Error trying to get users, ', err);
          return of([]);
        })
      )
      .subscribe(data => {
        console.log(data);
        this.users = data;
      });
  }

  navigateToUser(id: number): void{
    this.router.navigate(['/users', id]);
  }

}
