import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceComboBoxComponent } from './source-combo-box.component';

describe('SourceComboBoxComponent', () => {
  let component: SourceComboBoxComponent;
  let fixture: ComponentFixture<SourceComboBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceComboBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceComboBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
