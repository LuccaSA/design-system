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
import { IExample } from '../examples-browser/example.model';

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
	private _example: IExample;
	private code: string;
	private tsCode: string;
	constructor(private cd: ChangeDetectorRef, private cfr: ComponentFactoryResolver) {}

	ngAfterViewInit() {
		this.cd.detectChanges();
	}

	renderComponent() {
		const componentFactory = this.cfr.resolveComponentFactory(this._example.component);
		this.display.clear();
		this.display.createComponent(componentFactory);
	}

	public selectTab(selectedTab: TabComponent) {
		this.tabsQL.forEach(tab => tab.active = false);
		selectedTab.active = true;
	}

}
