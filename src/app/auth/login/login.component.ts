import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as fromLoginActions from '../store/actions/login.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public router: Router;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit(values: { username: string; password: string }): void {
    this.store.dispatch(new fromLoginActions.Login(values));
  }
}
