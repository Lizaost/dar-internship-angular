import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
  providers: [
  ]
})
export class AuthModule {

}
