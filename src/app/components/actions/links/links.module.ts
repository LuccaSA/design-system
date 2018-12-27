import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { LinksComponent } from './links.component';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		LinksComponent,
		BasicExampleComponent
	],
	entryComponents: [
		LinksComponent,
		BasicExampleComponent
	]
})
export class DsLinksModule {}
