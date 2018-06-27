import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  public expandedGroup: string;

  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
    this.expandRoutePath(router);
  }

  expandRoutePath(router: Router) {
    if (!router) {
      return;
    }
    const partsUrl = router.url.split('/').filter(route => route.length > 0).map(route => route.substr(0, route.indexOf('#') != -1 ? route.indexOf('#') : route.length));

    if (partsUrl.length === 0) {
      return;
    }
    const parentPath = router.config.find(configPath => configPath.path === partsUrl[0]);
    if (!parentPath || partsUrl.length === 1) {
      return;
    }

    const childPath = parentPath.children.find(childPath => childPath.path === partsUrl[1]);
    if (!childPath){
      return;
    }
    this.expandedGroup = childPath.data.menuGroup;
  }

  ngOnInit() {
  }
}
