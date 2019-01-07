import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { TextfieldsComponent } from './textfields.component';
import { BasicExampleComponent } from './basic/basic.example';
import { StylesExampleComponent } from './styles/styles.example';
import { SizesExampleComponent } from './sizes/sizes.example';
import { MessagesExampleComponent } from './messages/messages.example';
import { ValidationExampleComponent } from './validation/validation.example';
import { SuffixExampleComponent } from './suffix/suffix.example';
import { StatusExampleComponent } from './status/status.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { RadioExampleComponent } from './radio/radio.example';
import { TextareaExampleComponent } from './textarea/textarea.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		TextfieldsComponent,
		BasicExampleComponent,
		StylesExampleComponent,
		SizesExampleComponent,
		MessagesExampleComponent,
		ValidationExampleComponent,
		SuffixExampleComponent,
		StatusExampleComponent,
		PalettesExampleComponent,
		RadioExampleComponent,
		TextareaExampleComponent,
	],
	entryComponents: [
		TextfieldsComponent,
		BasicExampleComponent,
		StylesExampleComponent,
		SizesExampleComponent,
		MessagesExampleComponent,
		ValidationExampleComponent,
		SuffixExampleComponent,
		StatusExampleComponent,
		PalettesExampleComponent,
		RadioExampleComponent,
		TextareaExampleComponent,
	]
})
export class DsTextfieldsModule { }
