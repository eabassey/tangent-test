import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { AppSettingsService } from './app-settings.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ErrorsModule],
  providers: [AppSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
