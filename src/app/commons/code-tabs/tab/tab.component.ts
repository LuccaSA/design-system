import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string;
  @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
