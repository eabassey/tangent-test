import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { TestBed } from '@angular/core/testing';
import { DashboardModule } from '../dashboard.module';
import { TopPanelComponent } from './top-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TopPanel Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule]
    });
    app = test(DashboardModule);
    comp = app.run(TopPanelComponent);
  });

  it('should exist', () => {
    comp.verify(expectThat.element('div.row').exists());
  });
});
