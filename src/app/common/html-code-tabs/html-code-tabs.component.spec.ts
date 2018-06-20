import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCodeTabsComponent } from './html-code-tabs.component';

describe('HtmlCodeTabsComponent', () => {
  let component: HtmlCodeTabsComponent;
  let fixture: ComponentFixture<HtmlCodeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlCodeTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCodeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
