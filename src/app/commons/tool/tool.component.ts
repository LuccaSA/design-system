import { Component, Input } from '@angular/core';
import { ITool } from './tool.model';

@Component({
	selector: 'ds-tool',
	templateUrl: './tool.component.html',
	styleUrls: ['./tool.component.scss']
})
export class ToolComponent {

	constructor() { }

	@Input() tool: ITool;

}
