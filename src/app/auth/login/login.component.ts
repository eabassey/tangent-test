import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as fromLoginActions from '../store/actions/login.actions';
import { Store } from '@ngrx/store';
import { getLoginError } from '../store/selectors/login.selectors';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
  public router: Router;
  public form: FormGroup;
  errorMessage: string;
  errorSubscription: Subscription;

  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.errorSubscription = this.store
      .select(getLoginError)
      .pipe(
        map(err => {
          if (err) {
            return err.error.non_field_errors[0];
          }
        })
      )
      .subscribe(msg => (this.errorMessage = msg));
  }

  public onSubmit(values: { username: string; password: string }): void {
    this.store.dispatch(new fromLoginActions.Login(values));
    this.form.reset();
  }

  retryLogin() {
    window.location.reload();
  }

  ngOnDestroy() {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }
}
