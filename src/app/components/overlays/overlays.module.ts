import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { ModalsComponent, DialogTestComponent } from './modals/modals.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogTestComponent
  ],
  declarations: [
    ModalsComponent,
    TooltipsComponent,
    DialogTestComponent
  ]
})
export class OverlaysModule { }
