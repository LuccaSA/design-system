import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { ColorsExampleComponent } from './colors/colors.example';
import { SizeExampleComponent } from './size/size.example';
declare var require: any;

@Component({
	selector: 'ds-icons',
	templateUrl: './icons.component.html',
	styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Icons',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: `
				Si vous ne souhaitez pas utiliser de ligatures, vous pouvez appeler les icones en camelCase via le prefix <code class="code">icon-</code>. ex. <code class="code">&lt;i class="lucca-icon icon-chevronSouth"&gt;&lt;/i&gt;</code>
				`
			},
			{
				title: 'Couleurs',
				component: ColorsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./colors/colors.example.html'),
				extra: `Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
			},
			{
				title: 'Tailles',
				component: SizeExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./size/size.example.html'),
				extra: `Vous pouvez changer manuellement la taille des icones en appliquant une <code class="code">font-size</code>`
			}
		],
		theme: this.docApi.theme('icons')
	};
	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
