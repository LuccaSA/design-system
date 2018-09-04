import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { CalloutsComponent } from './callouts.component';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { TitleExampleComponent } from './title/title.example';
import { KillableExampleComponent } from './killable/killable.example';
import { IconsExampleComponent } from './icons/icons.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		CalloutsComponent,
		BasicExampleComponent,
		PalettesExampleComponent,
		TitleExampleComponent,
		KillableExampleComponent,
		IconsExampleComponent,
	],
	entryComponents: [
		CalloutsComponent,
		BasicExampleComponent,
		PalettesExampleComponent,
		TitleExampleComponent,
		KillableExampleComponent,
		IconsExampleComponent,
	]
})
export class DsCalloutsModule { }
