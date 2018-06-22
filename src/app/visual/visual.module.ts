import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogosComponent } from './logos/logos.component';
import { ColorsComponent } from './colors/colors.component';
import { IllustrateComponent } from './illustrate/illustrate.component';
import { TypographyComponent } from './typography/typography.component';
import { VisualComponent } from './visual.component';
import { CommonsModule } from '../commons/commons.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    RouterModule
  ],
  declarations: [
    VisualComponent,
    ColorsComponent,
    IllustrateComponent,
    LogosComponent,
    TypographyComponent
  ]
})
export class VisualModule { }
