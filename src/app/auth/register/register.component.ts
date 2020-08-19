import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {EMPTY} from 'rxjs';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage = '';
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router) {
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

    this.authService.register(this.form.value.username, this.form.value.password)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          this.errorMessage = err.error ? err.error.message : err.message;
          this.form.reset();
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
