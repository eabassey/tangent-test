import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { TestBed } from '@angular/core/testing';
import { DashboardModule } from './dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

describe('Dashboard Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        NgbModalModule
      ],
      providers: [NgbModal, NgbModalStack]
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
