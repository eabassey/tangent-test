import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { BreadcrumbComponent } from './breadcrumb.component';
import { SharedModule } from '../../shared.module';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Breadcrumb Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    app = test(SharedModule);
    comp = app.run(BreadcrumbComponent);
  });

  it('should have an ordered list element with a class of breadcrumb', () => {
    comp.verify(expectThat.element('ol.breadcrumb').exists());
  });

  it('should have first link as Home', () => {
    comp.verify(expectThat.textOf('li:first-child').isEqualTo('Home'));
  });
});
