import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/entities/user';
import {AuthService} from '../../../core/services/auth.service';
import {Observable} from 'rxjs';
import {MatchService} from '../../../core/services/match.service';
import {AdminTagsService} from '../../../core/services/adminTags.service';
import {TagInterface} from '../../../core/interfaces/tag.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tags$: Observable<TagInterface[]>;

  matchs$: Observable<User[]>;

  constructor(
    private matchService: MatchService,
    private adminTagsService: AdminTagsService
  ) {
    this.matchs$ = matchService.get();
    this.tags$ = this.adminTagsService.get();
  }


  ngOnInit() {
    console.log(this.tags$);
  }

  get user(): User {
    return AuthService.user;
  }


}
