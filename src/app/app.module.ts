import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { AuthModule } from './auth/auth.module';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    AuthModule,
    AppRoutingModule,
    ErrorsModule,
    TabsModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
