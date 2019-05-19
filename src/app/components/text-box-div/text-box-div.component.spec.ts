import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxDivComponent } from './text-box-div.component';

describe('TextBoxDivComponent', () => {
  let component: TextBoxDivComponent;
  let fixture: ComponentFixture<TextBoxDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
