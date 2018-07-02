import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsCodeTabsComponent } from './code-tabs.component';

describe('HtmlCodeTabsComponent', () => {
  let component: DsCodeTabsComponent;
  let fixture: ComponentFixture<DsCodeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsCodeTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsCodeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
