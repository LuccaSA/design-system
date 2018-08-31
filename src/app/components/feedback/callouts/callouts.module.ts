import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { CalloutsComponent } from './callouts.component';
import { BasicExampleComponent } from './basic/basic.component';
import { PalettesExampleComponent } from './palettes/palettes.component';
import { TitleExampleComponent } from './title/title.component';
import { KillableExampleComponent } from './killable/killable.component';
import { IconsExampleComponent } from './icons/icons.component';

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
