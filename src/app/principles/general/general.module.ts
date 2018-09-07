import { NgModule } from '@angular/core';
import { DsTypographyPrinciplesModule } from './typography/typography.module';
import { DsVisionModule } from './vision/vision.module';
import { DsAccessibilityModule } from './accessibility/accessibility.module';
import { DsNavigationPrincipleModule } from '../components/navigation/navigation.module';
import { DsActionsPrinciplesModule } from './actions/actions-principles.module';
import { DsFormGuidelinesPrincipleModule } from './form-guidelines/form-guidelines.module';
import { DsOverlayPrinciplesModule } from './overlay/overlay.module';

@NgModule({
	imports: [
		DsVisionModule,
		DsAccessibilityModule,
		DsTypographyPrinciplesModule,
		DsNavigationPrincipleModule,
		DsActionsPrinciplesModule,
		DsFormGuidelinesPrincipleModule,
		DsOverlayPrinciplesModule
	]
})
export class DsGeneralPrinciplesModule { }
