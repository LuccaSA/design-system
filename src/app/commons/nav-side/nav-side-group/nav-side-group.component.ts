import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-nav-side-group',
  templateUrl: './nav-side-group.component.html',
  styleUrls: ['./nav-side-group.component.scss']
})
export class NavSideGroupComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public expanded = false;

  constructor() { }

  ngOnInit() {
  }

}
