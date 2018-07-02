import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ds-nav-side-item',
  templateUrl: './nav-side-item.component.html',
  styleUrls: ['./nav-side-item.component.scss']
})
export class NavSideItemComponent implements OnInit {

  @Input()
  public routerKey: string;

  @Input()
  public anchors: string;

  constructor() { }

  ngOnInit() {
  }

}
