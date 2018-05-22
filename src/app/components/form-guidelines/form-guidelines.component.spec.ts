import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGuidelinesComponent } from './form-guidelines.component';

describe('FormGuidelinesComponent', () => {
  let component: FormGuidelinesComponent;
  let fixture: ComponentFixture<FormGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
