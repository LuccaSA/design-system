import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { RadiosComponent } from './radios.component';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		RadiosComponent,
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
	],
	entryComponents: [
		RadiosComponent,
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
	]
})
export class DsRadiosModule { }
