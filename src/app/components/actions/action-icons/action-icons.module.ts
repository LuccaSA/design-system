import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { ActionIconsComponent } from './action-icons.component';
import { BasicExampleComponent } from './basic/basic.example';
import { StatusExampleComponent } from './status/status.example';
import { LoadingExample } from './loading/loading.example';
import { InvertedExample } from './inverted/inverted.example';
import { PalettesExample } from './palettes/palettes.example';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		ActionIconsComponent,
		BasicExampleComponent,
		StatusExampleComponent,
		LoadingExample,
		InvertedExample,
		PalettesExample
	],
	entryComponents: [
		ActionIconsComponent,
		BasicExampleComponent,
		StatusExampleComponent,
		LoadingExample,
		InvertedExample,
		PalettesExample
	]
})
export class DsActionIconsModule {}
