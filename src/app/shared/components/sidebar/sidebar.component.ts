import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [MenuService],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  constructor(public menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }

  ngOnInit() {}
}
