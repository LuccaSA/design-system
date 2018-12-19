import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { ContentExampleComponent } from './content/content.example';
import { TitleExampleComponent } from './title/title.example';
declare var require: any;
@Component({
  selector: 'ds-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Sections',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Contenu',
				component: ContentExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./content/content.example.html')
			},
      {
				title: 'Titre',
				component: TitleExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./title/title.example.html')
			}
		],
		theme: this.docApi.theme('palettes')
	};

  constructor( private docApi: DsDocApiService) { }

  ngOnInit() {
  }

}
