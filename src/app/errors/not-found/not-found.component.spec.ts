import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorsModule } from '../errors.module';
import { NotFoundComponent } from './not-found.component';

describe('NotFound Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    app = test(ErrorsModule);
    comp = app.run(NotFoundComponent);
  });

  it('should exist', () => {
    comp.verify(expectThat.element('div.error-container').exists());
  });
});
