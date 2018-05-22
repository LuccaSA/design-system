import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-side-group',
  templateUrl: './nav-side-group.component.html',
  styleUrls: ['./nav-side-group.component.scss']
})
export class NavSideGroupComponent implements OnInit {

  @Input()
  public title: string;

  public expanded = false;

  constructor() { }

  ngOnInit() {
  }

}
