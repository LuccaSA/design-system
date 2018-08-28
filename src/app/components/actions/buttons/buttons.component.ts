import { Component, OnInit } from '@angular/core';
import { IThemeProperty } from '../../../models/theme.model';
import SCSS_DOCS from '@ds-api/scss';

@Component({
  selector: 'ds-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
	theme: IThemeProperty[] = SCSS_DOCS['button'].children;

  constructor() { }

  ngOnInit() {
  }

}
