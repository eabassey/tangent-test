import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../../shared.module';
import { TestBed } from '@angular/core/testing';
import { AppSettingsService } from '../../../app-settings.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('Sidebar Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AppSettingsService]
    });
    app = test(SharedModule);
    comp = app.run(SidebarComponent);
  });

  it('should exist', () => {
    comp.verify(expectThat.element('div.sidebar-outer').exists());
  });
});
