import {Injectable} from '@angular/core';
import {User} from '../../shared/types';
import {catchError} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) {

  }
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError((err) => {
          console.log('Error trying to get users, ', err);
          return of([]);
        })
      );
  }

  getUser(id: number): Observable<User>{
    return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/' + id)
      .pipe(
        catchError((err) => {
          console.log('Error trying to get user, ', err);
          return throwError(err);
        })
      );
  }
}
