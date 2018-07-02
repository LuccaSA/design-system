import { Component, OnInit, QueryList, ViewChildren, Input } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'html-code-tabs',
  templateUrl: './html-code-tabs.component.html',
  styleUrls: ['./html-code-tabs.component.scss']
})
export class HtmlCodeTabsComponent implements OnInit {

  @ViewChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() code: string;
  public get escapedCode(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.code);
  }
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public selectTab(selectedTab: TabComponent) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    selectedTab.active = true;
  }

}
