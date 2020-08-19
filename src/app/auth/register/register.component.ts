import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {EMPTY} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(`Login: ${this.username}\nPassword: ${this.password}`);

    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Fill all required fields';
      return;
    }

    this.authService.register(this.username, this.password)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          this.errorMessage = err.error ? err.error.message : err.message;
          this.username = '';
          this.password = '';
          return EMPTY;
        })
      )
      .subscribe(res => {
          console.log(res);
          this.router.navigate(['/auth/login']);
        }
      );
  }
}
