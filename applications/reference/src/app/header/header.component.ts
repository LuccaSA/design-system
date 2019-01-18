import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'pri-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	searchControl = new FormControl();
}
