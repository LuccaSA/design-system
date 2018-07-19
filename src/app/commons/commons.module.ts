import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { NavSideItemComponent } from './nav-side/nav-side-item/nav-side-item.component';
import { NavSideGroupComponent } from './nav-side/nav-side-group/nav-side-group.component';
import { RouterModule } from '@angular/router';
import { ToolComponent } from './tool/tool.component';
import { DsCodeTabsComponent } from './code-tabs/code-tabs.component';
import { TabComponent } from './code-tabs/tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HighlightModule.forRoot({theme: 'vs2015'}),
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    NavSideComponent,
    NavSideItemComponent,
    NavSideGroupComponent,
    ToolComponent,
    DsCodeTabsComponent,
    TabComponent
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    NavSideComponent,
    NavSideItemComponent,
    NavSideGroupComponent,
    ToolComponent,
    DsCodeTabsComponent,
    TabComponent
  ]
})
export class CommonsModule { }
