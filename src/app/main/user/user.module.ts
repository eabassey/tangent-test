import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [UserComponent, UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([]),
    TabsModule
  ]
})
export class UserModule {}
