import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureGuidelinesComponent } from './structure-guidelines.component';

describe('StructureGuidelinesComponent', () => {
  let component: StructureGuidelinesComponent;
  let fixture: ComponentFixture<StructureGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
