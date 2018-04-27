import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutingModule, HttpClientModule],
  providers: [AuthService]
})
export class AuthModule {}
