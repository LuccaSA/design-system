import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { LoadingsComponent } from './loadings.component';
import { BasicExampleComponent } from './basic/basic.example';
import { LabelExampleComponent } from './label/label.example';
import { BlockExampleComponent } from './block/block.example';
import { InvertedExampleComponent } from './inverted/inverted.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		LoadingsComponent,
		BasicExampleComponent,
		LabelExampleComponent,
		BlockExampleComponent,
		InvertedExampleComponent,
	],
	entryComponents: [
		LoadingsComponent,
		BasicExampleComponent,
		LabelExampleComponent,
		BlockExampleComponent,
		InvertedExampleComponent,
	]
})
export class DsLoadingsModule { }
