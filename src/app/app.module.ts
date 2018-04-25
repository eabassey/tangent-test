import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ErrorsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
