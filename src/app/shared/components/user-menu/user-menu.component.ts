import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
  @Input() userInfo;
  @Output() onViewProfile = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  viewProfile() {
    this.onViewProfile.emit();
  }
}
