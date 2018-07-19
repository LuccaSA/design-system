import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGuidelinesComponent } from './text-guidelines.component';

describe('TextGuidelinesComponent', () => {
  let component: TextGuidelinesComponent;
  let fixture: ComponentFixture<TextGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
