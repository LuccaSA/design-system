import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { PartialExampleComponent } from './partial/partial.example';
declare var require: any;

@Component({
	selector: 'ds-checkboxes',
	templateUrl: './checkboxes.component.html',
	styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Checkboxes',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: `
				Les checkboxes réagissent aux attributs standards HTML "checked" et "disabled"
				`
			},
			{
				title: 'En ligne',
				component: InlineExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./inline/inline.example.html'),
			},
			{
				title: 'Partiel',
				description: `Ce mod sert à afficher un état incomplet sur une checkbox de type "Sélectionner tout".`,
				component: PartialExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./partial/partial.example.html'),
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: `Les couleurs de votre palette sont éditables via votre
				<a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
			},
		],
		theme: this.docApi.theme('checkbox')
	};
	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
