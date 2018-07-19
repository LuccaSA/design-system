import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGuidelinesComponent } from './action-guidelines.component';

describe('ActionGuidelinesComponent', () => {
  let component: ActionGuidelinesComponent;
  let fixture: ComponentFixture<ActionGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
