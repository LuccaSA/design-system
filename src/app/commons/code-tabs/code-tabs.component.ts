import {
	Component,
	OnInit,
	QueryList,
	ViewChildren,
	Input,
	AfterContentInit,
	ChangeDetectorRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
	selector: 'ds-code-tabs',
	templateUrl: './code-tabs.component.html',
	styleUrls: ['./code-tabs.component.scss']
})
export class DsCodeTabsComponent implements OnInit, AfterContentInit {

	@ViewChildren(TabComponent) tabs: QueryList<TabComponent>;
	@Input() code: string;
	@Input() tsCode: string;
	constructor(private cd: ChangeDetectorRef) { }

	ngOnInit() {
	}

	ngAfterContentInit () {
		this.cd.detectChanges();
	}

	public selectTab(selectedTab: TabComponent) {
		this.tabs.toArray().forEach(tab => tab.active = false);
		selectedTab.active = true;
	}

}
