import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'ds-nav-side-group',
  templateUrl: './nav-side-group.component.html',
  styleUrls: ['./nav-side-group.component.scss']
})
export class NavSideGroupComponent implements OnInit {

  @Input()
  public title: string;

  public expanded: boolean;

  public toggleMenu() {
    this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
