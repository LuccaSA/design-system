import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { NavSideItemComponent } from './nav-side/nav-side-item/nav-side-item.component';
import { NavSideGroupComponent } from './nav-side/nav-side-group/nav-side-group.component';
import { RouterModule } from '@angular/router';
import { ToolComponent } from './tool/tool.component';
import { HtmlCodeTabsComponent } from './html-code-tabs/html-code-tabs.component';
import { TabComponent } from './html-code-tabs/tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    NavSideComponent,
    NavSideItemComponent,
    NavSideGroupComponent,
    ToolComponent,
    HtmlCodeTabsComponent,
    TabComponent
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    NavSideComponent,
    NavSideItemComponent,
    NavSideGroupComponent,
    ToolComponent,
    HtmlCodeTabsComponent,
    TabComponent
  ]
})
export class CommonsModule { }
