import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographicRulesComponent } from './typogrpahic-rules.component';

describe('TypogrpahicRulesComponent', () => {
  let component: TypographicRulesComponent;
  let fixture: ComponentFixture<TypographicRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographicRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographicRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
