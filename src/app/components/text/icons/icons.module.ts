import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { IconsComponent } from './icons.component';
import { BasicExampleComponent } from './basic/basic.example';
import { ColorsExampleComponent } from './colors/colors.example';
import { SizeExampleComponent } from './size/size.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		IconsComponent,
		BasicExampleComponent,
		ColorsExampleComponent,
		SizeExampleComponent
	],
	entryComponents: [
		IconsComponent,
		BasicExampleComponent,
		ColorsExampleComponent,
		SizeExampleComponent
	]
})
export class DsIconsModule { }
