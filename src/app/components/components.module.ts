import { NgModule } from '@angular/core';
import { OverlaysModule } from './overlays/overlays.module';
import { UsersModule } from './users/users.module';
import { ActionsModule } from './actions/actions.module';
import { FeedbackModule } from './feedback/feedback.module';
import { FormModule } from './form/form.module';
import { LayoutModule } from './layout/layout.module';
import { ListingsModule } from './listings/listings.module';
import { LoadersModule } from './loaders/loaders.module';
import { MiscModule } from './misc/misc.module';
import { NavigationModule } from './navigation/navigation.module';
import { TextModule } from './text/text.module';
import { DsComponentsRoutingModule } from './components.router';
import { DsMainModule } from '../main';

@NgModule({
	imports: [
		ActionsModule,
		FeedbackModule,
		FormModule,
		LayoutModule,
		ListingsModule,
		LoadersModule,
		MiscModule,
		NavigationModule,
		OverlaysModule,
		TextModule,
		UsersModule,
		DsComponentsRoutingModule,
		DsMainModule,
	]
})
export class DsComponentsModule { }
