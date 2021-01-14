import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';



@NgModule({
  declarations: [SigninComponent, SignupComponent, LandingPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    UserPartsModule
  ]
})
export class AuthModule { }
