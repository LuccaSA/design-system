import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { LoadingsComponent } from './loadings.component';
import { BasicExampleComponent } from './basic/basic.example';
import { LabelExampleComponent } from './label/label.example';
import { BlockExampleComponent } from './block/block.example';
import { InvertedExampleComponent } from './inverted/inverted.example';
import { BigExample } from './big/big.example';
import { FullPageExample } from './full-page/full-page.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		LoadingsComponent,
		BasicExampleComponent,
		LabelExampleComponent,
		BlockExampleComponent,
		InvertedExampleComponent,
		BigExample,
		FullPageExample,
	],
	entryComponents: [
		LoadingsComponent,
		BasicExampleComponent,
		LabelExampleComponent,
		BlockExampleComponent,
		InvertedExampleComponent,
		BigExample,
		FullPageExample,
	]
})
export class DsLoadingsModule { }
