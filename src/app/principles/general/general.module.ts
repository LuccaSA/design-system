import { NgModule } from '@angular/core';
import { DsTypographyModule } from './typography/typography.module';
import { DsVisionModule } from './vision/vision.module';
import { DsAccessibilityModule } from './accessibility/accessibility.module';
import { DsActionsModule } from './actions/actions.module';
import { DsFormModule } from './form/form.module';
import { DsOverlayModule } from './overlay/overlay.module';

@NgModule({
	imports: [
		DsVisionModule,
		DsAccessibilityModule,
		DsTypographyModule,
		DsActionsModule,
		DsFormModule,
		DsOverlayModule
	]
})
export class DsGeneralPrinciplesModule { }
