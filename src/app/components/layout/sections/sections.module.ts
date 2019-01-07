import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { SectionsComponent } from './sections.component';
import { ContentExampleComponent } from './content/content.example';
import { TitleExampleComponent } from './title/title.example';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		SectionsComponent,
		ContentExampleComponent,
		TitleExampleComponent
	],
	entryComponents: [
		SectionsComponent,
		ContentExampleComponent,
		TitleExampleComponent
	]
})
export class DsSectionsModule {}
