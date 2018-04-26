import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app-settings.model';
import { AppSettingsService } from '../../../app-settings.service';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent {

  public settings: AppSettings;
  public pageTitle: string;
  public breadcrumbs: {
    name: string;
    url: string;
  }[] = [];

  constructor(
    public appSettingsService: AppSettingsService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public title: Title
  ) {
    this.settings = this.appSettingsService.settings;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = [];
        this.parseRoute(this.router.routerState.snapshot.root);
        this.pageTitle = '';
        this.breadcrumbs.forEach(breadcrumb => {
          this.pageTitle += ' > ' + breadcrumb.name;
        });
        this.title.setTitle(this.settings.name + this.pageTitle);
      }
    });
  }

  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb']) {
      if (node.url.length) {
        let urlSegments: UrlSegment[] = [];
        node.pathFromRoot.forEach(routerState => {
          urlSegments = urlSegments.concat(routerState.url);
        });
        const url = urlSegments
          .map(urlSegment => {
            return urlSegment.path;
          })
          .join('/');
        this.breadcrumbs.push({
          name: node.data['breadcrumb'],
          url: '/' + url
        });
      }
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }

  public closeSubMenus() {
    const menu = document.querySelector('#menuElement');
    if (menu) {
      for (let i = 0; i < menu.children.length; i++) {
        const child = menu.children[i].children[1];
        if (child) {
          if (child.classList.contains('show')) {
            child.classList.remove('show');
            menu.children[i].children[0].classList.add('collapsed');
          }
        }
      }
    }
  }
}


}
