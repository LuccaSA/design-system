import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { ButtonsComponent } from './buttons.component';
import { BasicExampleComponent } from './basic/basic.component';
import { PalettesExampleComponent } from './palettes/palettes.component';
import { StatusExampleComponent } from './status/status.component';
import { GroupsExampleComponent } from './groups/groups.component';
import { RadioExampleComponent } from './radio/radio.component';
import { SizesExampleComponent } from './sizes/sizes.component';
@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		ButtonsComponent,
		BasicExampleComponent,
		PalettesExampleComponent,
		StatusExampleComponent,
		GroupsExampleComponent,
		RadioExampleComponent,
		SizesExampleComponent
	],
	entryComponents: [
		ButtonsComponent,
		BasicExampleComponent,
		PalettesExampleComponent,
		StatusExampleComponent,
		GroupsExampleComponent,
		RadioExampleComponent,
		SizesExampleComponent
	]
})
export class DsButtonsModule {}
