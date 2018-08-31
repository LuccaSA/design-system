import {
	Component,
	QueryList,
	ViewChildren,
	Input,
	ViewChild,
	ViewContainerRef,
	AfterViewInit,
	ComponentFactoryResolver,
	ChangeDetectorRef,
	ChangeDetectionStrategy} from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { IExample } from '../structure';

@Component({
	selector: 'ds-code-tabs',
	templateUrl: './code-tabs.component.html',
	styleUrls: ['./code-tabs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class DsCodeTabsComponent implements AfterViewInit {

	@ViewChildren(TabComponent) tabsQL: QueryList<TabComponent>;
	@ViewChild('display', {read: ViewContainerRef}) display: ViewContainerRef;
	@Input()
	set example(example: IExample) {
		this._example = example;
		this.code = this._example.code;
		this.tsCode = this._example.tsCode;
		this.renderComponent();
	}
	public isSplitView: boolean;
	private _example: IExample;
	private code: string;
	private tsCode: string;
	private activeTab: TabComponent;
	constructor(private cd: ChangeDetectorRef, private cfr: ComponentFactoryResolver) {}

	ngAfterViewInit() {
		this.cd.detectChanges();
		this.activeTab = this.tabsQL.first;
	}

	renderComponent() {
		const componentFactory = this.cfr.resolveComponentFactory(this._example.component);
		this.display.clear();
		this.display.createComponent(componentFactory);
	}

	public selectTab(selectedTab: TabComponent) {
		this.tabsQL.forEach(tab => tab.active = false);
		selectedTab.active = true;
		this.activeTab = selectedTab;
		this.isSplitView = false;
	}

	public toggleSplitView() {
		if (!this.isSplitView) {
			this.tabsQL.forEach(tab => tab.active = true);
			this.isSplitView = true;
		} else {
			this.selectTab(this.activeTab);
		}
	}

}
