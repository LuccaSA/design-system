import { Component, OnInit } from '@angular/core';
import { DsDocApiService } from '../../../commons/doc-api';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.component';
import { PalettesExampleComponent } from './palettes/palettes.component';
import { StatusExampleComponent } from './status/status.component';
import { GroupsExampleComponent } from './groups/groups.component';
import { RadioExampleComponent } from './radio/radio.component';
import { SizesExampleComponent } from './sizes/sizes.component';
declare var require: any;

@Component({
	selector: 'ds-buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Bouton',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
				extra: 'Les boutons peuvent être utilisés comme des liens : <code class="code">&lt;a href="#"&gt;</code><br>Vous pouvez ajouter une classe <code class="code">mod-link</code>, pour donner l\'aspect d\'un lien a un bouton'
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.component.html'),
				extra: 'Les couleurs de votre palette sont éditables via votre <a href="https:/ / github.com / LuccaSA / lucca - front /#palettes" target="_blank">thème</a>'
			},
			{
				title: 'Tailles',
				component: SizesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sizes/sizes.component.html')
			},
			{
				title: 'Status',
				component: StatusExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./status/status.component.html'),
				extra: 'Vous pouvez désactiver un bouton avec la classe <code class="code">is-disabled</code>, mais vous ne pourrez plus utiliser de tooltip'
			},
			{
				title: 'Groupe',
				component: GroupsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./groups/groups.component.html')
			},
			{
				title: 'Radio',
				component: RadioExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./radio/radio.component.html')
			},
		],
		theme: this.docApi.theme('button')
	};

	constructor(private docApi: DsDocApiService) {}

	ngOnInit() {
	}

}
