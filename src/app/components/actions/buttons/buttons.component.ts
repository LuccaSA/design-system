import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { StatusExampleComponent } from './status/status.example';
import { GroupsExampleComponent } from './groups/groups.example';
import { RadioExampleComponent } from './radio/radio.example';
import { SizesExampleComponent } from './sizes/sizes.example';
declare var require: any;

@Component({
	selector: 'ds-buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Boutons',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: 'Les boutons peuvent être utilisés comme des liens : <code class="code">&lt;a href="#"&gt;</code><br>Vous pouvez ajouter une classe <code class="code">mod-link</code>, pour donner l\'aspect d\'un lien a un bouton'
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: 'Les couleurs de votre palette sont éditables via votre <a href="https:/ / github.com / LuccaSA / lucca - front /#palettes" target="_blank">thème</a>'
			},
			{
				title: 'Tailles',
				component: SizesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sizes/sizes.example.html')
			},
			{
				title: 'Status',
				component: StatusExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./status/status.example.html'),
				extra: 'Vous pouvez désactiver un bouton avec la classe <code class="code">is-disabled</code>, mais vous ne pourrez plus utiliser de tooltip'
			},
			{
				title: 'Groupe',
				component: GroupsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./groups/groups.example.html')
			},
			{
				title: 'Radio',
				component: RadioExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./radio/radio.example.html')
			},
		],
		theme: this.docApi.theme('button')
	};

	constructor(private docApi: DsDocApiService) {}

	ngOnInit() {
	}

}
