import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { TestBed } from '@angular/core/testing';
import { DashboardModule } from './dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';

describe('Dashboard Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule]
    });
    app = test(DashboardModule);
    comp = app.run(DashboardComponent);
  });

  it('should have the top-panel component as child', () => {
    comp.verify(expectThat.element('app-top-panel').exists());
  });

  it('should have the bottom-panel component as child', () => {
    comp.verify(expectThat.element('app-bottom-panel').exists());
  });
});
