import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { TestBed } from '@angular/core/testing';
import { DashboardModule } from '../dashboard.module';
import { BottomPanelComponent } from './bottom-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

describe('BottomPanel Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [NgbModal, NgbModalStack]
    });
    app = test(DashboardModule);
    comp = app.run(BottomPanelComponent);
  });

  it('should exist', () => {
    comp.verify(expectThat.element('div.row').exists());
  });
});
