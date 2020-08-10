import {Component, Input, OnInit} from '@angular/core';
import {NavItem, User} from '../../shared/types';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params && params.id){
        this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .subscribe(data => {
            console.log(data);
            this.user = data;
          });
      }
    });
  }

}
