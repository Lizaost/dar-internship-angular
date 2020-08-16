import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UsersService} from './services/users.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    UsersComponent,
    UserComponent
  ],
  providers: [
    UsersService,
  ]
})
export class UsersModule {

}
