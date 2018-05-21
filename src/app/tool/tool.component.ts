import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public title: string;

  @Input()
  public link: string;

  @Input()
  public linkName: string;

  @Input()
  public imageUrl: string;

}
