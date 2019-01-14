import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { CheckboxesComponent } from './checkboxes.component';
import { BasicExampleComponent } from './basic/basic.example';
import { InlineExampleComponent } from './inline/inline.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { PartialExampleComponent } from './partial/partial.example';
import { BigExample } from './big/big.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		CheckboxesComponent,
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
		PartialExampleComponent,
		BigExample,
	],
	entryComponents: [
		CheckboxesComponent,
		BasicExampleComponent,
		InlineExampleComponent,
		PalettesExampleComponent,
		PartialExampleComponent,
		BigExample,
	]
})
export class DsCheckboxesModule { }
