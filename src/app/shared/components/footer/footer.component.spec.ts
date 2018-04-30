import test, { App, expectThat, Fixture } from 'ng-test-runner';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../../shared.module';

describe('Footer Component', () => {
  let app: App;
  let comp: Fixture;

  beforeEach(() => {
    app = test(SharedModule);
    comp = app.run(FooterComponent);
  });

  it('should have a div with an app-footer class', () => {
    comp.verify(expectThat.element('div.app-footer').exists());
  });
});
