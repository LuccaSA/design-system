import { Component, Input} from '@angular/core';

@Component({
	selector: 'ds-nav-side-item',
	templateUrl: './nav-side-item.component.html',
	styleUrls: ['./nav-side-item.component.scss']
})
export class NavSideItemComponent {
	@Input()
	public link: string;

}
