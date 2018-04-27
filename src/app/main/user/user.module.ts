import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [UserComponent, UserProfileComponent],
  imports: [CommonModule, RouterModule]
})
export class UserModule {}
