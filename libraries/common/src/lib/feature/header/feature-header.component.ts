import { Component, OnInit, Input } from '@angular/core';
import { DSPackages } from '../feature-infos.model';

@Component({
	selector: 'pri-feature-header',
	templateUrl: './feature-header.component.html',
	styleUrls: ['./feature-header.component.scss']
})
export class FeatureHeaderComponent {
	@Input() title: string;
	@Input() packages: DSPackages[];
}
