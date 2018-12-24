import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { StylesExampleComponent } from './styles/styles.example';
import { SizesExampleComponent } from './sizes/sizes.example';
import { StatusExampleComponent } from './status/status.example';
import { SuffixExampleComponent } from './suffix/suffix.example';
import { MessagesExampleComponent } from './messages/messages.example';
import { ValidationExampleComponent } from './validation/validation.example';
import { RadioExampleComponent } from './radio/radio.example';
import { TextareaExampleComponent } from './textarea/textarea.example';
import { PalettesExampleComponent } from './palettes/palettes.example';

declare var require: any;

@Component({
	selector: 'ds-textfields',
	templateUrl: './textfields.component.html',
	styleUrls: ['./textfields.component.scss']
})
export class TextfieldsComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Textfield',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: `
				Utilisez <code class="code">&lt;div class="textfield mod-block"&gt;</code> pour un textfield prenant toute la largeur<br>
				Utilisez <code class="code">&lt;div class="textfield mod-inline"&gt;</code> pour passer le textfield en inline-block`
			},
			{
				title: 'Styles',
				component: StylesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./styles/styles.example.html'),
				extra: `Utilisez <code class="code">&lt;div class="textfield-input is-filled"&gt;</code> pour garder le label en position haute en mode material`
			},
			{
				title: 'Tailles',
				description: `
				Utilisez un des mods suivants pour changer la largeur du textfield :<br>
				<code class="code">mod-shortest</code>,<code class="code">mod-shorter</code>,<code class="code">mod-short</code>,
				<code class="code">mod-long</code>,<code class="code">mod-longer</code> or <code class="code">mod-longest</code>`,
				component: SizesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sizes/sizes.example.html'),
			},
			{
				title: 'Status',
				component: StatusExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./status/status.example.html'),
			},
			{
				title: 'Suffixes',
				component: SuffixExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./suffix/suffix.example.html'),
				extra: `
				Pour utiliser un suffix sans textfield-label,
				il est nécessaire d'ajouter une classe <code class="code">mod-noLabel</code> au textfield
				`
			},
			{
				title: 'Messages',
				component: MessagesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./messages/messages.example.html'),
			},
			{
				title: 'Validation / Feedback',
				description: `
				Ajoutez une classe <code class="code">is-loading</code> puis une classe <code class="code">is-valid</code>
				ou <code class="code">is-invalid</code> sur <code class="code">&lt;div class="textfield"&gt;</code>
				pour une validation en sortie de focus.
				`,
				component: ValidationExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./validation/validation.example.html'),
			},
			{
				title: 'Radio',
				description: `Le mod "radio" vous permet d'afficher un textfield à l'interieur d'un label de radio.`,
				component: RadioExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./radio/radio.example.html'),
			},
			{
				title: 'Textarea',
				component: TextareaExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./textarea/textarea.example.html'),
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: `
				Les couleurs de votre palette sont éditables via votre
				<a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>
				`
			},
		],
		theme: this.docApi.theme('textfield')
	};
	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
