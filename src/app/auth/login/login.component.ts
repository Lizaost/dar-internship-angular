import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {EMPTY} from 'rxjs';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.form);

    this.errorMessage = '';

    // if (!this.username || !this.password) {
    //   this.errorMessage = 'Fill all required fields';
    //   return;
    // }

    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.get('username').value, this.form.value.password)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error ? err.error.message : err.message;
          this.form.reset();
          return EMPTY;
        })
      )
      .subscribe(res => {
        console.log('AUTH', res);
        this.authService.setLoggedIn(res);
        this.router.navigate(['/']);
      });

  }
}
