import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BottomPanelComponent implements OnInit, OnDestroy {
  public colorScheme = {
    domain: ['#FFFFFF']
  };
  autoScale = true;
  animations = true;
  gradient = true;
  view = [700, 300];

  gender = [{ name: 'Male', value: 12 }, { name: 'Female', value: 21 }];
  status = [{ name: 'Active', value: 31 }, { name: 'Inactive', value: 11 }];
  race = [
    { name: 'Black', value: 31 },
    { name: 'White', value: 11 },
    { name: 'Indian', value: 21 }
  ];
  level = [{ name: 'Senior', value: 31 }, { name: 'Junior', value: 21 }];
  constructor() {}

  ngOnInit() {}

  public onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {}
}
