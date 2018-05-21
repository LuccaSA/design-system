import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypogrpahicRulesComponent } from './typogrpahic-rules.component';

describe('TypogrpahicRulesComponent', () => {
  let component: TypogrpahicRulesComponent;
  let fixture: ComponentFixture<TypogrpahicRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypogrpahicRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypogrpahicRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
