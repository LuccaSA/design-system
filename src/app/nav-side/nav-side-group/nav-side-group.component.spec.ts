import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideGroupComponent } from './nav-side-group.component';

describe('NavSideGroupComponent', () => {
  let component: NavSideGroupComponent;
  let fixture: ComponentFixture<NavSideGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSideGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSideGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
