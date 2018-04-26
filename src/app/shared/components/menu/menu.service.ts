import { Injectable, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Menu } from './menu.model';
import { menuItems } from './menu';

@Injectable()
export class MenuService {
  constructor(
    public renderer: Renderer2,
    private router: Router,
    private location: Location
  ) {}
  getMenuItems(): Menu[] {
    return menuItems;
  }
  createMenu(menu: Menu[], nativeElement) {
    const menuElement = this.renderer.createElement('div');
    this.renderer.setAttribute(menuElement, 'id', 'menuElement');
    menu.forEach(menuItem => {
      if (menuItem.parentId === 0) {
        const subMenu = this.createMenuItem(menu, menuItem);
        this.renderer.appendChild(menuElement, subMenu);
      }
    });
    this.renderer.appendChild(nativeElement, menuElement);
  }
  createMenuItem(menu: Menu[], menuItem) {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'card');
    const link = this.renderer.createElement('a');
    this.renderer.addClass(link, 'menu-item-link');
    this.renderer.setAttribute(link, 'data-toggle', 'tooltip');
    this.renderer.setAttribute(link, 'data-placement', 'right');
    this.renderer.setAttribute(link, 'data-animation', 'false');
    this.renderer.setAttribute(
      link,
      'data-container',
      '.vertical-menu-tooltip-place'
    );
    this.renderer.setAttribute(link, 'data-original-title', menuItem.title);
    const icon = this.renderer.createElement('i');
    this.renderer.addClass(icon, 'fa');
    this.renderer.addClass(icon, 'fa-' + menuItem.icon);
    this.renderer.appendChild(link, icon);
    const span = this.renderer.createElement('span');
    this.renderer.addClass(span, 'menu-title');
    this.renderer.appendChild(link, span);
    const menuText = this.renderer.createText(menuItem.title);
    this.renderer.appendChild(span, menuText);
    this.renderer.setAttribute(link, 'id', 'link' + menuItem.id);
    this.renderer.addClass(link, 'transition');
    this.renderer.appendChild(div, link);
    if (menuItem.routerLink) {
      this.renderer.listen(link, 'click', () => {
        this.router.navigate([menuItem.routerLink]);
        this.setActiveLink(menu, link);
        // this.closeOtherSubMenus(div);
      });
    }
    if (menuItem.href) {
      this.renderer.setAttribute(link, 'href', menuItem.href);
    }
    if (menuItem.target) {
      this.renderer.setAttribute(link, 'target', menuItem.target);
    }
    return div;
  }
  public setActiveLink(menu: Array<Menu>, link) {
    if (link) {
      menu.forEach(menuItem => {
        const activeLink = document.querySelector('#link' + menuItem.id);
        if (activeLink) {
          if (activeLink.classList.contains('active-link')) {
            activeLink.classList.remove('active-link');
          }
        }
      });
      this.renderer.addClass(link, 'active-link');
    }
  }
  public getActiveLink(menu: Array<Menu>) {
    const url = this.location.path();
    const routerLink = url; // url.substring(1, url.length);
    if (menu) {
      const activeMenuItem = menu.filter(
        item => item.routerLink === routerLink
      );
      if (activeMenuItem[0]) {
        const activeLink = document.querySelector(
          '#link' + activeMenuItem[0].id
        );
        return activeLink;
      }
    }
    return false;
  }
  public showActiveSubMenu(menu: Array<Menu>) {
    const url = this.location.path();
    const routerLink = url; // url.substring(1, url.length);
    const activeMenuItem = menu.filter(item => item.routerLink === routerLink);
    if (activeMenuItem[0]) {
      const activeLink = document.querySelector('#link' + activeMenuItem[0].id);
      let parent = this.renderer.parentNode(activeLink);
      while (this.renderer.parentNode(parent)) {
        parent = this.renderer.parentNode(parent);
        if (parent.className === 'collapse') {
          const parentMenu = menu.filter(
            item => item.id === activeMenuItem[0].parentId
          );
          const activeParentLink = document.querySelector(
            '#link' + parentMenu[0].id
          );
          this.renderer.removeClass(activeParentLink, 'collapsed');
          this.renderer.addClass(parent, 'show');
        }
        if (parent.classList.contains('menu-wrapper')) {
          break;
        }
      }
    }
  }
}
