import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { TitlesComponent } from './titles.component';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		TitlesComponent,
		BasicExampleComponent
	],
	entryComponents: [
		TitlesComponent,
		BasicExampleComponent
	]
})
export class DsTitlesModule { }
