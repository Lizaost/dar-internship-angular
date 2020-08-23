import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../../shared/types';
import {UsersService} from './users.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UserDetailResolver implements Resolve<User> {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.usersService.getUser(+route.paramMap.get('id'))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.router.navigate(['404']);
          }
          return of(null);
        })
      );
  }

}
