import test, {
  expectThat,
  App,
  Fixture,
  Server,
  http,
  click,
  type,
  Req
} from 'ng-test-runner';
import { LoginComponent } from './login.component';
import { AuthModule } from '../auth.module';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../../../environments/environment';

describe('Login Component', () => {
  let app: App;
  let comp: Fixture;
  let server: Server;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        EffectsModule.forRoot([])
      ]
    });
    app = test(AuthModule);
    comp = app.run(LoginComponent);
  });

  it('should have a username input field', () => {
    comp.verify(expectThat.element('input[formControlName=username]').exists());
  });

  it('should have a password input field', () => {
    comp.verify(expectThat.element('input[formControlName=password]').exists());
  });

  it('should send the username and password as request body to server.', () => {
    let jsonSentToServer;
    server = http();
    server.post(environment.urls.token_endpoint, (req: Req) => {
      jsonSentToServer = req.body();
      req.sendStatus(200);
    });
    comp.perform(type('danny').in('input[formControlName=username]'));
    comp.perform(type('danny.wane').in('input[formControlName=password]'));

    comp.perform(click.in('button[type=submit]'));

    comp.verify(() =>
      expect(jsonSentToServer).toEqual({
        username: 'danny',
        password: 'danny.wane'
      })
    );
  });
});
