import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {AuthInfo} from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();
  public authInfo = null;

  setLoggedIn(authInfo: AuthInfo): void {
    localStorage.setItem('dar-lab-auth', JSON.stringify(authInfo));
    this.isLoggedIn.next(true);
  }

  setLoggedOut(): void {
    localStorage.removeItem('dar-lab-auth');
    this.isLoggedIn.next(false);
    this.authInfo = null;
  }

  constructor(private httpClient: HttpClient) {
    let authInfo = null;
    try {
      authInfo = localStorage.getItem('dar-lab-auth');
    } catch (e) {
      console.log(e);
    }
    if (authInfo) {
      this.authInfo = authInfo;
      this.isLoggedIn.next(true);
    }
  }

  login(username: string, password: string): any{
    const data = {
      grant_type: 'password',
      client_id: `${environment.clientId}`,
      client_secret: `${environment.clientSecret}`,
      username,
      password
    };
    return this.httpClient.post<any>(`${environment.griffonApiUrl}/oauth/token`, data);
  }

  register(username: string, password: string): any {
    const data = {
      client_id: `${environment.clientId}`,
      client_secret: `${environment.clientSecret}`,
      username,
      password
    };
    console.log(data);
    return this.httpClient.post<any>(`${environment.griffonApiUrl}/oauth/signup`, data);
  }
}
