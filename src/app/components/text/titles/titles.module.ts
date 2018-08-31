import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { TitlesComponent } from './titles.component';
import { BasicExampleComponent } from './basic/basic.component';

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
