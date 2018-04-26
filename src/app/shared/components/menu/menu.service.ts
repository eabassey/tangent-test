import { Injectable } from '@angular/core';
import { Menu } from './menu.model';
import { menuItems } from './menu';

@Injectable()
export class MenuService {
  constructor() {}

  getMenuItems(): Menu[] {
    return menuItems;
  }

  createMenu() {}

  createMenuItem() {}
}
