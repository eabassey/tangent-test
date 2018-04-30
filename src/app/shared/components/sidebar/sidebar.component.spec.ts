import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../../shared.module';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('Sidebar Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({})]
    });
    app = test(SharedModule);
    comp = app.run(SidebarComponent);
  });

  it('should exist', () => {
    comp.verify(expectThat.element('div.sidebar-outer').exists());
  });
});
