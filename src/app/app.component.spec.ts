import { TestBed } from '@angular/core/testing';
import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
    app = test(AppModule);
    comp = app.run(AppComponent);
  });

  it('should have a fixed navbar at the top', () => {
    comp.verify(expectThat.element('div.navbar-fixed').exists());
  });

  it('should have a fixed sidebar', () => {
    comp.verify(expectThat.element('div.sidebar-fixed').exists());
  });

  it('should have a div with wrapper class as main container', () => {
    comp.verify(expectThat.element('div.wrapper').exists());
  });
});
