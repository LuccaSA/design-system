import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure/title-block';
import { BasicExampleComponent } from './basic/basic.component';
import { DsDocApiService } from '../../../commons/services';
declare var require: any;

@Component({
	selector: 'ds-containers',
	templateUrl: './containers.component.html',
	styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Containers',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
				extra: 'Vous pouvez réduire ou augmenter sa largeur grâce à un mod : <code class="code">mod-xs</code>, <code class="code">mod-sm</code>, <code class="code">mod-md</code>, <code class="code">mod-lg</code>, <code class="code">mod-xl</code>, <code class="code">mod-xxl</code>	or <code class="code">mod-xxxl</code>'
			}
		],
		theme: this.docApi.theme('breakpoints')
	};
	constructor( private docApi: DsDocApiService ) { }

	ngOnInit() {
	}

}
