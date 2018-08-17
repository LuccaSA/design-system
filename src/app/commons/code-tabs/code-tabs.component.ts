import {
	Component,
	OnInit,
	QueryList,
	ViewChildren,
	Input,
	ViewChild,
	ViewContainerRef,
	AfterViewInit,
	ComponentFactoryResolver,
	ChangeDetectorRef} from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { IExample } from '../examples-browser/example.model';

@Component({
	selector: 'ds-code-tabs',
	templateUrl: './code-tabs.component.html',
	styleUrls: ['./code-tabs.component.scss']
})
export class DsCodeTabsComponent implements OnInit, AfterViewInit {

	@ViewChildren(TabComponent) tabsQL: QueryList<TabComponent>;
	@ViewChild('display', {read: ViewContainerRef}) display: ViewContainerRef;
	@Input() example: IExample;
	private code: string;
	private tsCode: string;
	constructor(private cd: ChangeDetectorRef, private cfr: ComponentFactoryResolver) {

	}

	ngOnInit() {
		this.code = this.example.code;
		this.tsCode = this.example.tsCode;
	}
	ngAfterViewInit() {
		const componentFactory = this.cfr.resolveComponentFactory(this.example.component);
		this.display.createComponent(componentFactory);
		this.cd.detectChanges();
	}

	public selectTab(selectedTab: TabComponent) {
		this.tabsQL.forEach(tab => tab.active = false);
		selectedTab.active = true;
	}

}
