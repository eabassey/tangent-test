import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { AppSettingsService } from './app-settings.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ErrorsModule,
    TabsModule.forRoot()
  ],
  providers: [AppSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
