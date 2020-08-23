import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UsersService} from './services/users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailResolver} from './services/UserDetail.resolver';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersRoutingModule,
    SharedModule,
  ],
  declarations: [
    UsersComponent,
    UserComponent,
    UserFormComponent,
  ],
  providers: [
    UsersService,
    UserDetailResolver,
  ]
})
export class UsersModule {}
