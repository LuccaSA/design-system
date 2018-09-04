import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { FileComponent } from './file.component';
import { StatesExampleComponent } from './states/states.example';
import { CompactExampleComponent } from './compact/compact.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		FileComponent,
		StatesExampleComponent,
		CompactExampleComponent,
	],
	entryComponents: [
		FileComponent,
		StatesExampleComponent,
		CompactExampleComponent,
	]
})
export class DsFileModule { }
