import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { SwitchesComponent } from './switches.component';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		SwitchesComponent,
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
	],
	entryComponents: [
		SwitchesComponent,
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
	]
})
export class DsSwitchesModule { }
