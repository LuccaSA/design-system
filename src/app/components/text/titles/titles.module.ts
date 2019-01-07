import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { TitlesComponent } from './titles.component';
import { BasicExampleComponent } from './basic/basic.example';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		DsCommonsModule,
		RouterModule
	],
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
