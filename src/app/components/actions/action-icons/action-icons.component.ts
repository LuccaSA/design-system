import { Component } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { StatusExampleComponent } from './status/status.example';
declare var require: any;

@Component({
	selector: 'ds-action-icons',
	templateUrl: './action-icons.component.html',
	styleUrls: ['./action-icons.component.scss']
})
export class ActionIconsComponent {
	infos: IFeatureInfos = {
		title: 'Icônes d\'action',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html')
			},
			{
				title: 'Status',
				component: StatusExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./status/status.example.html'),
				extra: 'Vous pouvez désactiver un icon d\'action avec la classe < code class= "code" > is-disabled </code>, mais vous ne pourrez plus utiliser de tooltip'
			}
		],
		theme: this.docApi.theme('actionIcon')
	};
	constructor(private docApi: DsDocApiService) { }

}
